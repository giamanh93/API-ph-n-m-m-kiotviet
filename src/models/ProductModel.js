'use strict';

import Schema from '../schemas/Product';
import mongoose from 'mongoose';

export const list = async () => {
	return await Schema.find().exec();
};

export const info = async (_id) => {
	return await Schema.findOne({
		_id: new mongoose.Types.ObjectId(_id)
	});
};

export const add = async ({ name, price, productImage, product_type, producer_id, code, trademark, sell_price, params }) => {
	const schema = new Schema({
		_id: new mongoose.Types.ObjectId(),
		name, price, productImage, code, trademark, sell_price,
		product_type: new mongoose.Types.ObjectId(product_type),
		producer_id: new mongoose.Types.ObjectId(producer_id),
		params
	});

	return await schema.save();
};

export const update = async ({ _id, name, price, productImage, product_type, producer_id, params }) => {
	return await Schema.updateOne({
		_id: new mongoose.Types.ObjectId(_id),
	}, {
			$set: {
				name, params, price, productImage,
				product_type: new mongoose.Types.ObjectId(product_type),
				producer_id: new mongoose.Types.ObjectId(producer_id),
				updated_at: new Date()
			}
		}, {
			upsert: false
		});
};

export const remove = async (_id) => {
	return await Schema.remove({
		_id: new mongoose.Types.ObjectId(_id)
	});
};
export const clear = async (_id) => {
	return await Schema.remove({});
};