require('dotenv').config();  
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || 'your-default-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  
}));

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use('/api', require('./routes/api'));  // Ensure this file exists and is correctly set up

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
