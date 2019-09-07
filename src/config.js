const config = {
	server: {
		host: 'localhost',
    port: 3004,
    get url() {
      return `http://${this.host}:${this.port}`;
    },
  },
};

module.exports = config;
