'use strict';
module.exports = function $if(condition, trueVal, falseVal) {
	return Promise.resolve(condition).then(function (val) {
		return val ? trueVal : falseVal;
	});
};
