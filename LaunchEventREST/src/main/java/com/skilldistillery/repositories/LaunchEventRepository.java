package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.LaunchEvent;

public interface LaunchEventRepository extends JpaRepository<LaunchEvent, Integer> {

	List<LaunchEvent> findByTitleLike(String keyword);

}
