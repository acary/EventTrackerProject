package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.LaunchEvent;

public interface LaunchEventService {
	
	List<LaunchEvent> index();

	List<LaunchEvent> findByTitleLike(String keyword);
	
	public LaunchEvent findById(Integer filmId);
	
	public LaunchEvent create(LaunchEvent film);
	
	public LaunchEvent update(Integer filmId, LaunchEvent film);
	
	public boolean delete(Integer filmId);

}
