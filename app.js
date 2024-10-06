const express = require('express');
const cors = require("cors");

const { route: userRoute } = require('./routes.js');
const port = 3000;

const app = express();  // Fixed: invoke express()

app.use(cors());
app.use('/users', userRoute);

app.listen(port, () => {  // Fixed: pass port as argument to app.listen()
    console.log(`Server is up and running on PORT: ${port}`);
});

module.exports = { app };
