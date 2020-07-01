const dotenv = require("dotenv");
dotenv.config();

const AWS = require("aws-sdk");
var fs = require("fs");
const config = new AWS.Config({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const client = new AWS.Rekognition();

exports.getEmotion = async (encodedImage) => {
  return new Promise(async (resolve, reject) => {
    const params = {
      Image: {
        Bytes: encodedImage,
      },
      Attributes: ["ALL"],
    };
    var emotions = {};
    client.detectFaces(params, function (err, response) {
      if (err) {
        console.log(err, err.stack);
        reject({});
      } else {
        response.FaceDetails.forEach((data) => {
          var emotion = data.Emotions[0].Type;
          if (emotions[emotion] == null) {
            emotions[emotion] = 1;
          } else {
            emotions[emotion] += 1;
          }
        });
        resolve(emotions);
      }
    });
  });
};
