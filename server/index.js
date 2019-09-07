const express = require('express');
const cors = require('cors');

const app = express();
/**
 * Simple server that get 3 query parameters:
 * amount to borrow, time, insurance,
 *
 * and return an object with
 * monthly, interest, apr, insurance, total
 */

// TODO: Enable All CORS Requests, This is not good, control with CORS options
app.use(cors());

/**
 * calculate the monthly pay for a loan
 * using formula:
 * P = r * PV / 1 - (1 + r)^-n
 * where:
 * P = Payment => Monthly
 * PV = Present Value => required value
 * r = rate per period => Interest rate % 0.69
 * n = number of periods => Number of months
 *
 * @param {Number} amount_required - amount required for loan
 * @param {Number} interest_rate - intereste applied for the bank
 * @param {Number} period_months - necessary time to pay the loan, in months
 */
function loan(amount_required, interest_rate, period_months) {
	const total_to_pay = amount_required * interest_rate;
	const periods_divisor = 1 - Math.pow(1 + interest_rate, period_months * -1);
	return total_to_pay / periods_divisor;
}

app.get('/', function(req, res) {
	res.send('Home page <b>Loan Calculator</b>, go to /loan');
});

app.get('/loan', function(req, res) {
	// TODO: The value req.query.insurance is not being use, it is boolean.
	console.log(
		'\x1b[32m%s= amount:%s, months:%s, insurance:%s\x1b[0m',
		'Request Started',
		req.query.amount,
		req.query.time,
		req.query.insurance
	);
	if (isNaN(req.query.amount) || isNaN(req.query.time)) {
		return res.status(400).send('Invalid non numeric values');
	}
	const interest = 0.069;
	const monthly = loan(Number(req.query.amount), interest, Number(req.query.time));
	const result = {
		monthly,
		interest,
		apr: 0,
		insurance: 0,
		total: monthly * Number(req.query.time),
	};
	setTimeout(() => {
		console.log('GET result: ', Date(), '\n', result);
		return res.status(200).send(result);
	}, 2000);
});

app.use(function(req, res) {
	res.status(404).send("Sorry, that route doesn't exist.");
});

app.listen(3004, function() {
	console.log('Example app listening on port 3004.');
});
