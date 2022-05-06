package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.LaunchEvent;

public interface LaunchEventService {
	
	List<LaunchEvent> index();

	List<LaunchEvent> findByTitleLike(String keyword);

}
