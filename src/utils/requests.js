import config from '../config'

const adjustLoan = (amount, time, insurance) =>
  `${config.server.url}/loan?amount=${amount}&time=${time}&insurance=${insurance}`

export default {
  adjustLoan
}
