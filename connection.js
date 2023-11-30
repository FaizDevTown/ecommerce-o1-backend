require('dotenv').config();

const mongoose = require('mongoose');

// const connectionStr = "mongodb://localhost:27017/zaid"

mongoose.connect("mongodb+srv://ankit12:ankit123@cluster0.9gqrb.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
