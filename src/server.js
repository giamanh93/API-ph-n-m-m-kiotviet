'use strict';
require('dotenv').config();
// import config from '../config';
import app from './app';
import Mongodb from './libs/Mongodb';

(async () => {
	// config mongodb
	try {
		await Mongodb();
	} catch(e) {
		console.error(e);
		process.exit(1);
	}

	// webserver API
	const port = process.env.PORT || 8080;
	const hostname = process.env.HOSTNAME || '0.0.0.0';

	const server = app.listen(port, hostname, () => {
		const {address, port} = server.address();
		console.log(`API listening at http://${address}:${port}`);
	});
})();

process.on('SIGINT', () => {
	setTimeout(()=>{
		process.exit(0);
	},1000);
});