'use strict';

import Schema from '../schemas/Order';
import mongoose from 'mongoose';

// export const list = async () => {
// 	return await Schema.find().exec();
// };

export const list = async (key, pages) => {
	if(key != 'null') {
		return await Schema.aggregate([
			{
				$match: { $or: [ { customer_phone: key}, { customer_name: key} ] },
			},
			{ $lookup: {
				from: "items", // other collection
				localField: "_id", // order._id
				foreignField: "order_id", // items.order_id
				as: "items" // set name of list
			}},
			{$sort: {"created_at": -1}}
		 ]);
	}else {
		return await Schema.aggregate([
			{$sort: {"created_at": -1}},
			{ $lookup: {
				from: "items", // other collection
				localField: "_id", // order._id
				foreignField: "order_id", // items.order_id
				as: "items" // set name of list
			}},
			{$skip : 10*parseInt(pages - 1)},
			{$limit : 10 },
		 ]);
	}
};

export const lists = async () => {
	return await Schema.aggregate([
		{$sort: {"created_at": -1}},
		{ $lookup: {
			from: "items", // other collection
			localField: "_id", // order._id
			foreignField: "order_id", // items.order_id
			as: "items" // set name of list
		}},
	 ]);
};

// export const info = async (_id) => {
// 	return await Schema.findOne({
// 		_id: new mongoose.Types.ObjectId(_id)
// 	});
// };

export const info = async (_id) => {
	return await Schema.aggregate([
		{
			$match: {
				_id: new mongoose.Types.ObjectId(_id)
			}
		}, {
			$lookup: {
				from: "items",
				localField: "_id",
				foreignField: "order_id",
				as: "items"
			}
		}
	 ]);
};

export const add = async ({customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date}) => {
	const schema = new Schema({
        _id: new mongoose.Types.ObjectId(),
		customer_name, customer_phone, customer_address, customer_description,start_date,
		customer_id: new mongoose.Types.ObjectId(customer_id), total
    });

    return await schema.save();
};

export const update = async ({_id, customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date}) => {
	return await Schema.updateOne({
		_id: new mongoose.Types.ObjectId(_id),
	}, {
		$set: {
			customer_name, customer_phone, customer_address, customer_description, start_date,
			customer_id: new mongoose.Types.ObjectId(customer_id), total,
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