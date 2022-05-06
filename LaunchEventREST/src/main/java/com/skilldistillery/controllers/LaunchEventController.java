package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
