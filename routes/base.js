const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    return res
    .json({
        message: "welcome to backend API",
        status: "success",
    })
    .status(200);
});

module.exports = router;
