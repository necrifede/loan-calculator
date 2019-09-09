const config = {
	server: {
		host: 'localhost',
    port: 3004,
    get url() {
      return `http://${this.host}:${this.port}`;
    },
  },
};

export default config;
