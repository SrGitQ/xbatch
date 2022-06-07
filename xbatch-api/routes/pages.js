var express = require("express");
var router = express.Router();
const pageModel = require("../models/page");

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get("/", async (req, res) => {
  const pages = await pageModel.find({});

  try {
    res.send(pages);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
