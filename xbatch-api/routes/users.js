var express = require('express');
var router = express.Router();
const dbo = require("../database")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', async (req, res, next) => {
  const dbConnect = dbo.getDb();

  dbConnect
  .collection("copy_aa")
  .find({}).limit(50)
  .toArray((err, result) => {
    if (err) {
      res.status(400).send("Hi error");
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
