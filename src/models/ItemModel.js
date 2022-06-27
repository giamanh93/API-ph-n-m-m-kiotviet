'use strict';

import Schema from '../schemas/Item';
import mongoose from 'mongoose';

export const list = async () => {
	return await Schema.find().exec();
};

export const info = async (_id) => {
	return await Schema.findOne({
		_id: new mongoose.Types.ObjectId(_id)
	});
};

export const add = async ({production_id, order_id, dongia, soluong, thanhtien}) => {
	const schema = new Schema({
        _id: new mongoose.Types.ObjectId(),
		dongia, soluong, thanhtien,
		production_id: new mongoose.Types.ObjectId(production_id),
		order_id: new mongoose.Types.ObjectId(order_id)
    });

    return await schema.save();
};

export const addMany = async (list) => {
    return await Schema.insertMany(list);
};

export const update = async ({_id, production_id, order_id, dongia, soluong, thanhtien}) => {
	return await Schema.updateOne({
		_id: new mongoose.Types.ObjectId(_id),
	}, {
		$set: {
			dongia, soluong, thanhtien,
			production_id: new mongoose.Types.ObjectId(production_id),
			order_id: new mongoose.Types.ObjectId(order_id),
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
export const clear = async () => {
	return await Schema.remove({});
};