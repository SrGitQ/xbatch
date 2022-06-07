var router = require("express").Router();
const pageModel = require("../models/page");

router.get("/", async (req, res) => {
  const pages = await pageModel.find({});

  try {
    res.send(pages);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
