const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser')
require('dotenv').config();

const router = require('./routes');

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)


const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
    app.listen(PORT,()  => {
        console.log('Connect to db')
        console.log("server is running on port " + PORT);
    })
});
