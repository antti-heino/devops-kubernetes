
const random = Math.random().toString(36).slice(2)

setInterval(() => {
	console.log(new Date().toISOString() + ' ' + random);
}, 5000);