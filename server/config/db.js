const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI);
	console.log(`Connection state (1): ${mongoose.connection.readyState}`);
};

module.exports = connectDB; 
