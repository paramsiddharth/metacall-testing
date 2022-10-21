const { hello, hello_callback } = require('./lib.py');

function main(name) {
	return hello(name) + ' and JavaScript';
}

function callback(name) {
	return hello_callback(str => name + ' ' + str + ' and JavaScript');
}

module.exports = {
	main,
	callback
};