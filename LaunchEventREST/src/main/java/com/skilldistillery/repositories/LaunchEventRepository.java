package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.LaunchEvent;

public interface LaunchEventRepository extends JpaRepository<LaunchEvent, Integer> {

}
