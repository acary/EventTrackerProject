package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.LaunchEvent;
import com.skilldistillery.services.LaunchEventService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost:4201" })
public class LaunchEventController {
	
	@Autowired
	LaunchEventService serv;
	
	@GetMapping(path = { "/", "events", "index" })
	public List<LaunchEvent> index() {
		return serv.index();
	}
	
	@GetMapping("events/search/{keyword}")
	private List<LaunchEvent> searchLaunchEvent(@PathVariable String keyword, HttpServletResponse res) {
		List<LaunchEvent> events = serv.findByTitleLike(keyword);
		if (events == null) {
			res.setStatus(404);
		}
		return events;
	}

	@GetMapping("events/{id}")
	public LaunchEvent show(@PathVariable Integer id, HttpServletResponse res) {
		LaunchEvent event = serv.findById(id);
		if(event == null) {
			res.setStatus(404);
		}
		return event;
	}
	
	@PostMapping("events")
	public LaunchEvent create(@RequestBody LaunchEvent event, HttpServletRequest req, HttpServletResponse res) {
		try {
			event = serv.create(event);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(event.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			event = null;
		}
		return event;
	}
	
	@PutMapping("events/{id}")
	public LaunchEvent updateEvent(
			@PathVariable("id") Integer id,
			@RequestBody LaunchEvent event,
			HttpServletResponse res
	) {
		try {
			event.setId(id);
			event = serv.update(id, event);
			if (event == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			event = null;
		}
		return event;
	}
	
	@DeleteMapping("events/{id}")
	public void deleteEvent(
			@PathVariable Integer id,
			HttpServletResponse res
	) {
		try {
			if (serv.delete(id)) {
				res.setStatus(204);
			}
			else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
}
