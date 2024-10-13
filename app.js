// require("dotenv").config()
const express = require('express');
const cors = require("cors");

const { route: userRoute } = require('./routes.js');
const PORT = 80

const app = express();

app.use(cors());
app.use('/users', userRoute);
app.use('/', (req, res)=>{
    res.send("Hello from root")
});

// Bind the app to 0.0.0.0 so it can accept requests from outside
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
});

module.exports = { app };
