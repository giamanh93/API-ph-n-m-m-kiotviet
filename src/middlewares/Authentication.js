'use strict';

import fs from 'fs';
import jwt from 'jsonwebtoken';
import path, { resolve } from 'path';
import config from '../../config'
// import { rejects } from 'assert';

// openssl genrsa -out config/private.key 2048
const cert = fs.readFileSync(__dirname + '/../../config/private.key');

export const sign = (data, expire) => {
	return jwt.sign(data, cert, { 
			expiresIn: expire || '1d',
			// algorithm: 'RS256'
	});
};

const getToken = (req) => {
	return req.cookies[config.token.cookie_name]; // || req.body.token || req.headers['x-access-token'];
};

export const checkToken = (token) => {
	return jwt.verify(token, cert);
};

const setData = (req, res, info) => {
	res.locals.user = info;
	req.user = info;
};

export const requestLogin = () => {
	return (req, res, next) => {
		const token = getToken(req);
		if (token) {
			try {
				const info = checkToken(token);
				setData(req, res, info);
				next();
			} catch (e) {
				return res.status(401).json({
					error: 401,
					message: 'Bạn chưa đăng nhập'
				});
			}
		} else {
			return res.status(401).json({
				error: 401,
				message: 'Bạn chưa đăng nhập'
			});
		}
	};
};

export const requestNotLogin = () => {
	return (req, res, next) => {
		const token = getToken(req);
		if(token) {
			return res.json({
				error: 2,
				message: 'Bạn đã đăng nhập nên không thể thực hiện thao tác này'
			});
		} else {
			next();
		}
	};
};

export const requestRole = (roles) => {
	return (req, res, next) => {
		const token = getToken(req);
		if(token) {
			const info = checkToken(token);
			if(info){
				setData(req, res, info);
				if(!roles.includes(info.role)) {
					return res.json({
						error: 403,
						message: 'Bạn không có quyền để thực hiện thao tác này'
					});
				}
			} else {
				return res.json({
					error: 401,
					message: 'Bạn chưa đăng nhập'
				});
			}
		} else {
			return res.json({
				error: 401,
				message: 'Bạn chưa đăng nhập'
			});
		}
		next();
	};
};

export default {
	sign,
	requestLogin,
	requestRole
}