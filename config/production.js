'use strict';

module.exports = {
	port: 6000,
	hostname: '127.0.0.1',
	publish: true,
	server_static: '',
	server_upload: '',
	mongodb: {
		connect: 'mongodb://127.0.0.1:27017/api',
		option: {
			useNewUrlParser: true,
			useCreateIndex: false,
			autoReconnect: true,
			autoIndex: false,
			reconnectInterval: 500,
			// user: null,
			// pass: null
		},
		debug: false
	},
	redis: {

	},
	password_prefix: 'MANH',
	token: {
		cookie_name: 'token',
		option: {
			// domain: '',
			maxAge: 86400000,
			httpOnly: false,
			path: '/'
		}
	}
};