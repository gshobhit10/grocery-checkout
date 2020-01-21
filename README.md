### Problem : 
In this sample you will implement a grocery store cash register. Given a number of items you will be required to calculate the total bill. Items are priced a few of different ways:

A given price for each item, eg. Boxes of Cheerios are $6.99 each

A given price by weight, eg. Apples are $2.49 per pound

Items can be on sale where you might receive bulk discounts, eg. Buy two get one free sales are also available
Coupons are available to get money off the bill when the total amount is above a threshold, eg.$5 off when you spend $100 or more

### Solution:
I have implemented a price calculator which calculates the price of the grocery that the user has scanned.

It takes 3 inputs
1. Name of the item
2. Unit price of the item (This could be price per unit or price per lb)
3. Quantity of the item (Again, this could be whole numbers for retail products or weighted sum of the item)

For the Discounts, I have only considered 2 options here at the moment -
1. Bulk discounts.
2. Amount threshold discounts.

It is assumed that amount and condition of the discounts are given to us by the backend in the form of a JSON file. This file makes this application scalable, we can change the values here and the application will correspond to the changed values.

### Explanation of JSON File received from the backend
{   
	"AmountDiscount":           //AmountDiscount refers to the Amount Threshold discount
		{
			"Total": 100,       //Total here refers to the threshold that's required to apply this discount.
			"Discount": 5       //This is the percent of discount that would be applicable after the above condition is met.
		},
	"BulkDiscount":             //BulkDiscount is the discount when the user buys an item in bulk
		{
			"Total": 3,         //Total here refers to the number of item needed to be bought to qualify as bulk order
			"Discount": 1       //Discount here refers to number of items the user gets free if the above condition is met.
		}
}