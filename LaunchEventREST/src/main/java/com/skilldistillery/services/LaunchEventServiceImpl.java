package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.LaunchEvent;
import com.skilldistillery.repositories.LaunchEventRepository;

@Service
public class LaunchEventServiceImpl implements LaunchEventService {
	
	@Autowired
	LaunchEventRepository repo;

	@Override
	public List<LaunchEvent> index() {
		return repo.findAll();
	}

	@Override
	public List<LaunchEvent> findByTitleLike(String keyword) {
		keyword = "%" + keyword + "%";
		return repo.findByTitleLike(keyword);
	}

}
