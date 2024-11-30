package com.ecity.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecity.entities.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer> {

}
