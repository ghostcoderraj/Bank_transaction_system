const express = require('express');
const cookieParser = require("cookie-parser")


//         Routes
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRoutes = require('./routes/transaction.routes')

const app = express()

app.use(cookieParser())
app.use(express.json()) //byy default data cant be read this reason use 
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})

app.use("/api/auth",authRouter)
app.use("/api/accounts",accountRouter)

app.use("/api/transactions",transactionRoutes)




module.exports = app