const http = require('https');

const options = {
	method: 'GET',
	hostname: 'cdn.jsdelivr.net',
	port: null,
	path: '/npm/@fawazahmed0/currency-api@latest/v1/currencies.json',
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();