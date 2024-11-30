package com.ecity.services;

import java.util.List;

import com.ecity.entities.Booking;
import com.ecity.entities.User;

public interface BookingServices {
	Booking saveBooking (Booking booking);
	Booking findById (int id);
	List<Booking> findAllBookings();
	void deleteBooking (Booking booking);
	List<Booking> findAll();
	List<Booking> findByUser(User id);
	
}
