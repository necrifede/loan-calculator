import config from 'src/config'

const { DEBOUNCE_TIME } = config

export const debounce = (func, timeout = DEBOUNCE_TIME) => {
  console.log('timeout: ', timeout)
  let timer = null

  return (...args) => {
    console.log('timer: ', timer)
    window.clearTimeout(timer)
    timer = window.setTimeout(() => { func(...args) }, timeout)
  }
}
