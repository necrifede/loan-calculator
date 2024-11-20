import config from 'src/config'

let controller

export const fetchLoan = async (amount, time, insurance) => {
  controller = new AbortController()
  const signal = controller.signal

  try {
    const response = await fetch(`${config.server.url}/loan?amount=${amount}&time=${time}&insurance=${insurance}`, { signal })
    const data = await response.json()
    return data
  } catch (err) {
    console.error('fetch loan error: ', err)
  }
}

export const cancelFetchLoan = () => {
  if (controller) {
    controller.abort('custom abort')
  }
}
