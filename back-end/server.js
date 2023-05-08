const express = require('express');
const app = express();
require("dotenv").config;
const path = require('path');
const cors = require('cors');
const corsOptions = require("./config/corsOption");
const { logger } = require('./middleware/logEvents');
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;
// custom middleware logger
app.use(logger);
// Cross Origin Resource Sharing
app.use(cors());
// built-in middleware to handle urlencoded data
// in other words, form data:  get(aceuilController.getBnques)
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));
// built-in middleware for json 
app.use(express.json());
//cookie parser
app.use(cookieParser());
//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
// routes
app.use('/', require('../front-end/routes/api/root'));
app.use("/aceuil",require("../front-end/routes/api/aceuil"));
app.use("/comparer",require("../front-end/routes/api/Comparer"));
app.use("/news",require("../front-end/routes/api/news"));
app.use('/register', require('./routes/api/register'));
app.use("/auth", require("./routes/api/auth"));
app.use("/refresh", require("./routes/api/refresh"));
app.use("/logout",require("./routes/api/logout"));
//app.use(verifyJWT);
app.use("/admin",require("./routes/api/admin"));


app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));