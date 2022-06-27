'use strict';

import Schema from '../schemas/Customer';
import mongoose from 'mongoose';

export const list = async () => {
	return await Schema.find().exec();
};

export const info = async (_id) => {
	return await Schema.findOne({
		_id: new mongoose.Types.ObjectId(_id)
	});
};

export const add = async ({name, phone, address, description}) => {
	const schema = new Schema({
        _id: new mongoose.Types.ObjectId(),
        name, phone, address, description
    });

    return await schema.save();
};

export const update = async ({_id, name, phone, address, description}) => {
	return await Schema.updateOne({
		_id: new mongoose.Types.ObjectId(_id),
	}, {
		$set: {
            name, phone, address, description,
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