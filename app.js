require('dotenv').config();
const express = require('express');
const cors = require('cors');
const matkulRouter = require('./routes/matkulRoute')
const loginRouter = require('./routes/loginRoute')
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Matkul Routes
app.use('/matkul', matkulRouter);
app.use('/login', loginRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})