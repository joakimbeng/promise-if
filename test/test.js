'use strict';
var test = require('ava');
var $if = require('../src');

test('false condition', function (assert) {
	assert.plan(1);
	return $if(Promise.resolve(false), Promise.resolve('hey'), Promise.resolve('ho'))
		.then(function (actual) {
			var expected = 'ho';
			assert.is(actual, expected);
		});
});

test('true condition', function (assert) {
	assert.plan(1);
	return $if(Promise.resolve(true), Promise.resolve('hey'), Promise.resolve('ho'))
		.then(function (actual) {
			var expected = 'hey';
			assert.is(actual, expected);
		});
});

test('non-promise value', function (assert) {
	assert.plan(1);
	return $if(false, 'hey', 'ho')
		.then(function (actual) {
			var expected = 'ho';
			assert.is(actual, expected);
		});
});
