'use strict';

import * as Model from '../models/UserModel';

export const list = async () => {
	return await Model.list();
};

export const info = async (_id) => {
	return await Model.info(_id);
};

export const add = async ({email, name, password}) => {
	return await Model.add({email, name, password});
};

export const update = async ({_id, email, name, password}) => {
	return await Model.update({_id, email, name, password});
};

export const remove = async (_id) => {
	return await Model.remove(_id);
};

export const clear = async (_id) => {
	return await Model.clear();
};

export const login = async (email) => {
	return await Model.login(email);
};