package com.ecity.services;

import com.ecity.dto.BookingPayment;
import com.ecity.entities.Payment;

public interface IPaymentService {
	Payment savePaymentDetails(BookingPayment payment) throws Exception;
	String updatePaymentDetails(BookingPayment payment) throws Exception;

}
