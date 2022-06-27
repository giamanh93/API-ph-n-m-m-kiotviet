'use strict';

import * as Model from '../models/ProductModel';

export const list = async () => {
	return await Model.list();
};

export const info = async (_id) => {
	return await Model.info(_id);
};

export const add = async ({name, price, productImage, product_type, producer_id, code, trademark, sell_price, params}) => {
	return await Model.add({name, price, productImage, product_type, producer_id, code, trademark, sell_price, params});
};

export const update = async ({_id, name, price, productImage, product_type, producer_id, params}) => {
	return await Model.update({_id, name, price, productImage, product_type, producer_id, params});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};

export const clear = async () => {
	return await Model.clear();
};