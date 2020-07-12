var express = require("express");
var router = express.Router();

var emotionController = require("./Controllers/EmotionController");

router.post("/getEmotions", emotionController.getEmotion);
router.get("/", (req, res) => {
    res.send({"api":"rekognition"});
});
module.exports = router;
