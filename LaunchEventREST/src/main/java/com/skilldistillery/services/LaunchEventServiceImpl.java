package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public LaunchEvent findById(Integer id) {
		Optional<LaunchEvent> op = repo.findById(id);
		LaunchEvent event = null;
		if(op.isPresent()) {
			event = op.get();
		}
		return event;
	}

	@Override
	public LaunchEvent create(LaunchEvent event) {
		return repo.saveAndFlush(event);
	}

	@Override
	public LaunchEvent update(Integer id, LaunchEvent event) {
		if(repo.existsById(id)) {
			return repo.saveAndFlush(event);
		}
		return null;
	}

	@Override
	public boolean delete(Integer id) {
		boolean isDeleted = false;
		try {
			repo.deleteById(id);
			isDeleted = true;
		}
		catch(Exception e) {
			System.out.println(e);
		}
		return isDeleted;
	}

}
