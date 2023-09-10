const express = require('express');
const cors = require('cors')
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require("graphql");
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000; 

//start db
connectDB();

const app = express(); 
app.use(cors());
app.use(
	'/graphql', 
	graphqlHTTP({
		schema: schema, 
		//rootValue: root,
		graphiql: process.env.NODE_ENV === 'development'
		//graphiql: true,
	})
);

console.log(process.env.NODE_ENV)
app.listen(port, console.log(`Server running on port ${port}`));


