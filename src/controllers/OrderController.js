'use strict';

import { toInt } from '../libs/Parse';
import { isObjectId } from '../libs/Validate';
import * as Service from '../services/OrderService';
import * as ItemService from '../services/ItemService';

export const list = async (req, res) => {
    const key = req.query.key
    const pages = req.query.pages
	try {
		const list = await Service.list(key, pages);
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
        const customer_name = body.customer_name;
        const customer_phone = body.customer_phone;
        const customer_address = body.customer_address;
        const customer_description = body.customer_description;
        const customer_id = body.customer_id;
        const items = body.items;
        const total = body.total;
        const start_date = body.start_date;

        // validate data
        if (customer_name && typeof customer_name === 'string') {
            const info = await Service.add({
                customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date
            });

            if(Array.isArray(items) && items.length > 0) {
                items.forEach(item => {
                    item.order_id = info._id;
                });

                const results = await ItemService.addMany(items);
                info.items = results;
            }

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
        const customer_name = body.customer_name;
        const customer_phone = body.customer_phone;
        const customer_address = body.customer_address;
        const customer_description = body.customer_description;
        const customer_id = body.customer_id;
        const total = body.total;
        const start_date = body.start_date;

        if (isObjectId(id)) {
            const info = await Service.update({
                _id: id,
                customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date
            });
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
