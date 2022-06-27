'use strict';

import * as Model from '../models/ProducerModel';

export const list = async () => {
	return await Model.list();
};

export const info = async (_id) => {
	return await Model.info(_id);
};

export const add = async ({name, phone}) => {
	return await Model.add({name, phone});
};

export const update = async ({_id, name, phone}) => {
	return await Model.update({_id, name, phone});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};