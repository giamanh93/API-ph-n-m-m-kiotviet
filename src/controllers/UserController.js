'use strict';

import { toInt } from '../libs/Parse';
import { getPassword } from '../libs/Utils';
import { isObjectId } from '../libs/Validate';
import * as Service from '../services/UserService';
import { sign } from '../middlewares/Authentication';
import config from '../../config';

export const list = async (req, res) => {
	try {
		const list = await Service.list();
		res.sendJson({
			list
		});
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const info = async (req, res) => {
	try {
        res.sendJson({
            info: req.user
        });
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const add = async (req, res) => {
    console.log(req.body)
	try {
        const body = req.body;
        const email = body.email;
        const name = body.name;
        const password = body.password;
        // validate data
        if (name && typeof name === 'string') {
            const info = await Service.add({
                email, name, password: getPassword(password)
            });
            res.sendJson({
                info
            });
        } else {
            res.sendError({
                error: 2,
                message: 'Name phải là string'
            });
        }
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const update = async (req, res) => {
	try {
        const body = req.body;
        const id = req.params.id;
        const email = body.email;
        const name = body.name;
        const password = body.password;

        if (isObjectId(id)) {
            if (name && typeof name === 'string') {
                const info = await Service.update({
                    _id: id,
                    email, name, password
                });
                res.sendJson({
                    info
                });
            } else {
                res.sendError({
                    error: 2,
                    message: 'Name phải là string'
                });
            }
        } else {
            res.sendError({
                error: 1,
                message: 'id không phải là dạng dữ liệu objectId'
            });
        }
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

// export const remove = async (req, res) => {
// 	try {
//         const id = req.params.id;
        
//         if (isObjectId(id)) {
//             const result = await Service.remove(id);
//             res.sendJson({
//                 result
//             });
//         } else {
//             res.sendError({
//                 error: 1,
//                 message: 'id không phải là dạng dữ liệu objectId'
//             });
//         }
// 	} catch (e) {
// 		res.sendError({
// 			error: 1000,
// 			message: e.message || e.stack || e
// 		});
// 	}
// };

// export const clear = async (req, res) => {
// 	try {
//         const result = await Service.clear();
//         res.sendJson({
//             result
//         });
// 	} catch (e) {
// 		res.sendError({
// 			error: 1000,
// 			message: e.message || e.stack || e
// 		});
// 	}
// };

export const login = async (req, res) => {
	try {
        const body = req.body;
        const email = body.email;
        const password = body.password;

        // validate email & password


        const info = await Service.login(email);

        if (info) {
            if(getPassword(password) === info.password) {
                const infoUser = info.toJSON();
                delete infoUser.password;
                delete infoUser.__v;
                const token = sign(infoUser);

                // set token via cookie
                res.cookie(config.token.cookie_name, token, config.token.option);
                res.sendJson({
                    info: {...infoUser,token: token, ...config.token.option}
                });
            } else {
                res.sendError({
                    error: 1,
                    message: 'Email hoặc password không đúng'
                });
            }
        } else {
            res.sendError({
                error: 1,
                message: 'Email hoặc password không đúng'
            });
        }
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const logout = async (req, res) => {
	try {
        res.clearCookie(config.token.cookie_name);
		res.sendJson({
			result: true
		});
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

// export const updatePassword = async (req, res) => {
// 	try {
// 		const body = req.body;
// 		const id = toString(req.params.id);
// 		const {error, value} = Joi.validate(body, Joi.object({
// 			password: Joi.string().min(6).max(30).trim().required(),
// 		}), langValidate);

// 		if(!error) {
// 			const result = Service.update(id, {password: getPassword(value.password)});
// 			res.sendJson({
// 				result
// 			});
// 		} else {
// 			res.sendError({
// 				error: 3,
// 				message: error
// 			});
// 		}
// 	} catch (e) {
// 		res.sendError({
// 			error: 1000,
// 			message: e.message || e.stack || e
// 		});
// 	}
// };