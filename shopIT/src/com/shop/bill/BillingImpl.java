package com.shop.bill;

import java.util.List;

import com.shop.pm.PriceMatrix;

public class BillingImpl {

	private PriceMatrix priceMatrix;

	public void setPriceMatrix(PriceMatrix priceMatrix) {
		this.priceMatrix = priceMatrix;
	}

	public double getTotalPrice(List<String> cart) {

		double total = 0.0;

		for (String item : cart) {
			total += priceMatrix.getPrice(item);
		}

		return total;

	}

}
