package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.LaunchEvent;
import com.skilldistillery.services.LaunchEventService;

@RequestMapping("api")
@RestController
public class LaunchEventController {
	@Autowired
	LaunchEventService serv;
	
	@GetMapping("index")
	public List<LaunchEvent> index() {
		return serv.index();
	}
	
	@GetMapping("events/{keyword}")
	private List<LaunchEvent> searchLaunchEvent(@PathVariable String keyword, HttpServletResponse res) {
		List<LaunchEvent> events = serv.findByTitleLike(keyword);
		if (events == null) {
			res.setStatus(404);
		}
		return events;
	}
	
//	@GetMapping("events/{id}")
//	private LaunchEvent showLaunchEvent(@PathVariable Integer id, HttpServletResponse res) {
//		LaunchEvent event = serv.findById(id);
//		if (event == null) {
//			res.setStatus(404);
//		}
//		return event;
//	}

//	@GetMapping("events")
//	public LaunchEvent addLaunchEvent(@RequestBody LaunchEvent eventParam, HttpServletRequest req, HttpServletResponse res) {
//		serv.create(eventParam);
//		res.setStatus(201);
//		System.out.println(eventParam);
//		return eventParam;
//	}
//
//	@PutMapping("events/{id}")
//	public LaunchEvent replaceLaunchEvent(@PathVariable Integer id, @RequestBody LaunchEvent updatedLaunchEvent, HttpServletRequest req, HttpServletResponse res) {
//		LaunchEvent event = serv.findById(id);
//		if (event == null) {
//			res.setStatus(404);
//		}
//		updatedLaunchEvent = serv.updateLaunchEvent(id, updatedLaunchEvent);
//		return updatedLaunchEvent;
//	}
//	
//	@DeleteMapping("events/{id}")
//	public boolean removeLaunchEvent(@PathVariable("id") Integer id, HttpServletRequest req, HttpServletResponse res) {
//		boolean removed = serv.removeLaunchEvent(id);
//		if (removed == false) {
//			res.setStatus(404);
//		}
//		return removed;
//	}
}
