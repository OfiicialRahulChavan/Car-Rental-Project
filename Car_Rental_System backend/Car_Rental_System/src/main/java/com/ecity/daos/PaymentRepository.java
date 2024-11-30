package com.ecity.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecity.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
