const config = {
  server: {
    host: 'localhost',
    port: 3004,
    get url () {
      return `http://${this.host}:${this.port}`
    }
  },
  DEBOUNCE_TIME: 500
}

export default config
