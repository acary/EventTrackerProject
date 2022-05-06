package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.entities.LaunchEvent;

public interface LaunchEventRepository extends JpaRepository<LaunchEvent, Integer> {

	List<LaunchEvent> findByTitleLike(@Param("keyword") String keyword);

}
