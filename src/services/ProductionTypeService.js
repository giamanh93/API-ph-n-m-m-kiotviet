'use strict';

import * as Model from '../models/ProductionTypeModel';

export const list = async () => {
	return await Model.list();
};

export const info = async (_id) => {
	return await Model.info(_id);
};

export const add = async ({name, production_code}) => {
	return await Model.add({name, production_code});
};

export const update = async ({_id, name, production_code}) => {
	return await Model.update({_id, name, production_code});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};