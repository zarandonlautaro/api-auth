const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//Routes
const authRoute = require('./routes/auth')

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('MongoDB Atlas Online 🌍')
)

//Middleware
app.use(express.json())

//Route Middlewares
app.use('/api/user', authRoute)

app.listen(8000, () => console.log('Server online 🏃‍♂️'))