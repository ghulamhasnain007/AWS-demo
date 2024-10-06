const express = require('express');
const cors = require("cors");

const { route: userRoute } = require('./routes.js');
const port = 3000;

const app = express();

app.use(cors());
app.use('/users', userRoute);

// Bind the app to 0.0.0.0 so it can accept requests from outside
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is up and running on PORT: ${port}`);
});

module.exports = { app };
