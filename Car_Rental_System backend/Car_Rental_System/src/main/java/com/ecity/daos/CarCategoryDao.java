package com.ecity.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecity.entities.CarCategory;

public interface CarCategoryDao extends JpaRepository<CarCategory, Integer>{
	List<CarCategory> findBycarTypeId(int id);
	List<CarCategory> findAll();
	List<CarCategory> findCarById(int id);

}
