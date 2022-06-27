'use strict';

import * as Model from '../models/CustomerModel';

export const list = async () => {
	return await Model.list();
};

export const info = async (_id) => {
	return await Model.info(_id);
};

export const add = async ({name, phone, address, description}) => {
	return await Model.add({name, phone, address, description});
};

export const update = async ({_id, name, phone, address, description}) => {
	return await Model.update({_id, name, phone, address, description});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};
export const clear = async (_id) => {
	return await Model.clear();
};