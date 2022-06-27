'use strict';

import Schema from '../schemas/ProductionType';
import mongoose from 'mongoose';

export const list = async () => {
	// return await Schema.find().skip(page*resPerPage).limit(resPerPage).exec();
	return await Schema.find().exec();
};

export const info = async (_id) => {
	return await Schema.findOne({
		_id: new mongoose.Types.ObjectId(_id)
	});
};

export const add = async ({name, production_code}) => {
	const schema = new Schema({
        _id: new mongoose.Types.ObjectId(),
        name,
        production_code
    });

    return await schema.save();
};

export const update = async ({_id, name, production_code}) => {
	return await Schema.updateOne({
		_id: new mongoose.Types.ObjectId(_id),
	}, {
		$set: {
            name, production_code,
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