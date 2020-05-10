const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout,signup} = require('../controllers/auth');


router.post("/signup",[
    check("name", "Name should be at least 2 char").isLength({ min: 2 }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 2 char").isLength({ min: 3 }),
], signup);
router.get("/signout", signout);

module.exports = router;