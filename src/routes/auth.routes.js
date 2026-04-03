const express = require("express");
const { userRegisterController,userLoginController } = require("../controllers/auth.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { userLogoutController } = require("../controllers/auth.controller");
const router = express.Router()



// POST /api/auth/register
router.post("/register",userRegisterController)
router.post("/login",userLoginController)
router.post("/logout",authMiddleware,userLogoutController)

module.exports = router
