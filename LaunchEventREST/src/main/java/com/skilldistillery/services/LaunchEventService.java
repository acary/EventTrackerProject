package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.LaunchEvent;

public interface LaunchEventService {
	
	List<LaunchEvent> index();

	List<LaunchEvent> findByTitleLike(String keyword);
	
	public LaunchEvent findById(Integer id);
	
	public LaunchEvent create(LaunchEvent event);
	
	public LaunchEvent update(Integer id, LaunchEvent event);
	
	public boolean delete(Integer id);

}
