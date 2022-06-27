'use strict';

import * as Model from '../models/ItemModel';

export const list = async () => {
	return await Model.list();
};

export const info = async (_id) => {
	return await Model.info(_id);
};

export const add = async ({production_id, order_id, dongia, soluong, thanhtien}) => {
	return await Model.add({production_id, order_id, dongia, soluong, thanhtien});
};

export const addMany = async (list) => {
	return await Model.addMany(list);
};

export const update = async ({_id, production_id, order_id, dongia, soluong, thanhtien}) => {
	return await Model.update({_id, production_id, order_id, dongia, soluong, thanhtien});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};
export const clear = async () => {
	return await Model.clear();
};