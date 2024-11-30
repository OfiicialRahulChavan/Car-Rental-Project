package com.ecity.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecity.entities.Driver;

public interface DriverDao extends JpaRepository<Driver, Integer> {
	
}
