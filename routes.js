var express = require("express");
var router = express.Router();

var emotionController = require("./Controllers/EmotionController");

router.post("/getEmotions", emotionController.getEmotion);

module.exports = router;
