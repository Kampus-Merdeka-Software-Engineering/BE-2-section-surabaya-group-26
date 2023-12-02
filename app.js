require('dotenv').config();
const express = require('express');
const cors = require('cors');
const matkulRouter = require('./routes/matkulRoute')
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Matkul Routes
app.use('/matkul', matkulRouter)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})