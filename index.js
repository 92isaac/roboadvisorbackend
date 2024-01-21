/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const dbConnect = require("./config/dbConnect");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { errorhandler, notFound } = require("./mdiddleware/errorhandler");
const investmentRouter = require("./routes/stockmarketroute")


dbConnect()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/api/investment", investmentRouter);





app.use(notFound)
app.use(errorhandler)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  