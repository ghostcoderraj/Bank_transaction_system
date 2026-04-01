const express = require('express');
const cookieParser = require("cookie-parser")


//         Routes
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")

const app = express()

app.use(cookieParser())
app.use(express.json()) //byy default data cant be read this reason use 
app.use(express.urlencoded({ extended: true }));

// Use Routes

app.use("/api/auth",authRouter)
app.use("/api",accountRouter)




module.exports = app