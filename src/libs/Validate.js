'use strict';

import moment from 'moment';

export const isInt = (s) => {
	const pattern = /^(\-)?\d+$/;
	return pattern.test(s);
};

export const isNumber = (s) => {
	const pattern = /^(\-)?\d+(\.\d+)?$/;
	return pattern.test(s);
};

export const isEmail = (s) => {
	const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return pattern.test(s);
};

export const isPhoneNumber = (s) => {
	const pattern = /^0([9,8]\d{8}|1\d{9})$/;
	return pattern.test(s);
};

export const isUsername = (s) => {
	const pattern = /^[a-z](_?[a-z0-9]){3,19}$/;
	return pattern.test(s);
};

export const isPassword = (s) => {
	const pattern = /^.{6,30}$/;
	return pattern.test(s);
};

export const isNameVi = (s) => {
	const pattern = /^[a-zA-Z\s áàảãạăâắằấầặẵẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịđùúủũụưứửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼÊỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵỷỹ]{3,30}$/gi;
	return pattern.test(s);
};

export const isUrl = (s) => {
	const pattern = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
	return pattern.test(s);
};

export const isValidDate = (date, format = 'DD/MM/YYYY') => {
	return moment(date, format).isValid();
};

export const isObjectId = (s) => {
	const pattern = /^[0-9a-fA-F]{24}$/;
	return pattern.test(s);
};