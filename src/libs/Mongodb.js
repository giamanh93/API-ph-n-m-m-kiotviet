/**
 * Created by tanmv on 27/05/2018.
 */

'use strict';
import mongoose from 'mongoose';
import colors from 'colors';

export default () => {
	return new Promise((resolve, reject) => {
		mongoose.connect(process.env.MONGODB_URI);
		mongoose.set('debug', process.env.MONGODB_DEBUG === 'true');
		mongoose.connection.on('connected', () => {
			console.log(colors.cyan('MongoDB: ') + colors.green('connected'));
			resolve(mongoose);
		});

		mongoose.connection.on('error', (err) => {
			console.log(colors.cyan('MongoDB: ') + colors.red('error'));
			reject(err);
		});
	});
}

process.on('SIGINT', () => {
	if(mongoose.connection) {
		mongoose.connection.close();
	}
});