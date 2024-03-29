require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/dbConn');

//middleware
app.use(express.json());
app.use(cookieParser());

//DbConnection
connectDB();


app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);

//routing
app.use('/auth', require('./routes/authRoutes'));
app.use('/application', require('./routes/applicationRoutes'));
app.use('/jobs', require('./routes/jobRoutes'))

const port = process.env.PORT || 8080;

mongoose.connection.once('open',()=>{
  console.log('Connected to Mongodb')
  app.listen(port, ()=>console.log(`listening on port ${port}`))
})
