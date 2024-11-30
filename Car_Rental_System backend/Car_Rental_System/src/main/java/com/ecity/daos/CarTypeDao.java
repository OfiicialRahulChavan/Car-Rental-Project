package com.ecity.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecity.entities.CarType;

public interface CarTypeDao extends JpaRepository<CarType, Integer>{

}
