import config from 'src/config'

const { DEBOUNCE_TIME } = config

export const debounce = (func, timeout = DEBOUNCE_TIME) => {
  let timer = null

  return (...args) => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => { func(...args) }, timeout)
  }
}
