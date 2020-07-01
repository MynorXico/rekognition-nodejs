var emotionService = require("../Services/EmotionService");
const { encode } = require("punycode");

exports.getEmotion = async function (req, res) {
  try {
    var encoded = new Buffer(req.body.encoded, 'base64');

    console.log("Before sending encoded : ");
    var emotions = await emotionService.getEmotion(encoded);
    res.send(emotions);
  } catch (e) {
    res.status(400);
    res.send({ error: true, message: "Imagen no válida" });
  }
};

function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}