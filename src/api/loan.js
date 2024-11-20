import config from 'src/config'

export const fetchLoan = (amount, time, insurance) =>
  fetch(`${config.server.url}/loan?amount=${amount}&time=${time}&insurance=${insurance}`)
    .then(response => response.json())
    .then(data => data) // TODO: handle error
