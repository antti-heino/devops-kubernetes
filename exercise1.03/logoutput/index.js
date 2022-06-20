const crypto = require('crypto');

const createRandom = () => crypto.randomBytes(16).toString("hex");
const startingString = createRandom()

setInterval(() => {
	console.log(Date.now() + ' ' + startingString);
}, 5000);