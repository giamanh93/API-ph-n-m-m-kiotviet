'use strict';

// import path from 'path';
// import colors from 'colors';
import express from 'express';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

import routers from './routers';
import config from '../config';
import {sendError, sendJson} from './middlewares/Response';

const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(compression());

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use((req, res, next) => {
	// res.locals.user = req.session.user; //set current user
	res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Credentials', true);
	res.locals.publish = config.publish;
	res.locals.server_static = config.server_static;
	res.locals.server_upload = config.server_upload;
	res.locals.pathname = req._parsedUrl.pathname;
	res.set('x-powered-by', 'MVTHP-2018');
	next();
});

app.use(sendError);
app.use(sendJson);
app.use('/api' , routers);

app.use(function(req, res, next){
	res.status(404);

	res.sendError({
		error: 404,
		message: 'not found'
	})
});
export default app;