package com.ecity.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecity.entities.Billing;

public interface BillingDao extends JpaRepository<Billing, Integer> {
}
