import { server } from '../config';

const adjustLoan = (amount, time, insurance) =>
	`${server.url}/loan?amount=${amount}&time=${time}&insurance=${insurance}`;

export default {
	adjustLoan,
};
