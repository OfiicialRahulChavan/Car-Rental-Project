package com.ecity.services;

import java.util.List;

import com.ecity.entities.Billing;

public interface BillingSerivce {
	Billing saveBilling (Billing billing);

	List<Billing> findAll();

}
