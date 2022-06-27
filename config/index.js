'use strict';

const production = require('./production');
const development = require('./development');

const config = {
	port: 5000,
	hostname: '127.0.0.1',
	publish: false,
	server_static: '',
	server_upload: '',
	mongodb: {
		// connect: 'mongodb://127.0.0.1:27017/history',
		option: {
			// useMongoClient: true,
			// poolSize: 10,
			autoReconnect: true,
			// user: null,
			// pass: null,
			//replset: { rs_name: 'HorusRS', auto_reconnect: true, poolSize: 100, connectWithNoPrimary: true,},
			config: { autoIndex: false}
		},
		// debug: true
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
	
const configFinal = process.env.NODE_ENV === 'production' ? Object.assign(config, production): Object.assign(config, development);
module.exports = configFinal;
// export default configFinal;