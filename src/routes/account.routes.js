const express = require("express");
const {authMiddleware} = require("../middleware/auth.middleware")
const {createAccountController , getUserAccountsController, getAccountBalanceController} = require("../controllers/account.controller")

const router = express.Router()


// Post api/accounts
// Create a new account
// protected route

router.post("/accounts",authMiddleware,createAccountController)
// GET /api/accounts
// Get all accounts
// protected route

router.get("/accounts",authMiddleware,getUserAccountsController)

// Get /api/accounts/:accountId
// Get a single account
// protected route
router.get("/balance/:accountId",authMiddleware,getAccountBalanceController)

module.exports = router