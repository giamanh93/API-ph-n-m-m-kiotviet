'use strict';

import Schema from '../schemas/User';
import mongoose from 'mongoose';

export const list = async () => {
	return await Schema.find().exec();
};

export const info = async (_id) => {
	return await Schema.findOne({
		_id: new mongoose.Types.ObjectId(_id)
	});
};

export const login = async (email) => {
	return await Schema.findOne({
		email
	});
};

export const add = async ({email, name, password}) => {
	const schema = new Schema({
        _id: new mongoose.Types.ObjectId(),
        email, name, password
    });

    return await schema.save();
};

export const update = async ({_id, email, name, password}) => {
	return await Schema.updateOne({
		_id: new mongoose.Types.ObjectId(_id),
	}, {
		$set: {
            email, name, password,
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