'use strict';

import * as Model from '../models/OrderModel';

export const list = async (key, pages) => {

	const lists = await Model.lists();
	const listOrderInPages = await Model.list(key, pages)
	let tongtien= 0;;
	if(lists && lists.length > 0) {
		lists.forEach((ele, idx) => {
			tongtien += ele.total
		})
	}
	const orders = {
		lists: listOrderInPages,
		count: lists.length,
		total: tongtien
	}
	return orders;
};

export const info = async (_id) => {
	// return await Model.info(_id);
	const list = await Model.info(_id);
	return list && list.length > 0 ? list[0] : null;
};

export const add = async ({customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date}) => {
	return await Model.add({customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date});
};

export const update = async ({_id, customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date}) => {
	return await Model.update({_id, customer_name, customer_phone, customer_address, customer_description, customer_id, total, start_date});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};
export const clear = async () => {
	return await Model.clear();
};