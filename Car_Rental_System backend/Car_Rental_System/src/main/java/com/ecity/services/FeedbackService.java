package com.ecity.services;

import java.util.List;

import com.ecity.entities.Feedback;

public interface FeedbackService {
	Feedback saveFeedback(Feedback feedback);
	
	List<Feedback> displayAll();
	

	
}
