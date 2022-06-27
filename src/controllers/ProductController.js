'use strict';

import { toInt } from '../libs/Parse';
import { isObjectId } from '../libs/Validate';
import * as Service from '../services/ProductService';

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
        const id = req.params.id;
        
        // check id là object id
        if (isObjectId(id)) {
            const info = await Service.info(id);
            res.sendJson({
                info
            });
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

export const add = async (req, res) => {
	try {
        const body = req.body;
        const name = body.name;
        const price = body.price;
        const productImage = body.productImage;
        const product_type = body.product_type;
        const producer_id = body.producer_id;
        const code = body.code;
        const trademark = body.trademark;
        const sell_price = body.sell_price;
        const params = body.params;

        // validate data
        if (name && typeof name === 'string') {
            const info = await Service.add({
                name, params, price, productImage, product_type, producer_id, code, trademark, sell_price
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
        const name = body.name;
        const price = body.price;
        const productImage = body.productImage;
        const product_type = body.product_type;
        const producer_id = body.producer_id;
        const params = body.params;

        if (isObjectId(id)) {
            if (name && typeof name === 'string') {
                const info = await Service.update({
                    _id: id,
                    name, params, price, productImage, product_type, producer_id
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

export const remove = async (req, res) => {
	try {
        const id = req.params.id;
        
        if (isObjectId(id)) {
            const result = await Service.remove(id);
            res.sendJson({
                result
            });
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
export const clear = async (req, res) => {
	try {
        const result = await Service.clear();
        res.sendJson({
            result
        });
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};
