var router = require("express").Router();
const pageModel = require("../models/page");

//get pages
router.get("/", async (req, res) => {
  const pages = await pageModel.find({});

  try {
    res.send(pages);
  } catch (error) {
    res.status(500).send(error);
  }
});

//add page to db
router.post("/", async (req, res) => {
  const page = new pageModel(req.body);

  try {
    const newPage = await page.save();
    res.send(newPage);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update page
router.put("/:id", async (req, res) => {
  try {
    const updatedPage = await pageModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedPage);
  } catch (error) {
    res.status(500).send(error);
  }
});

//getting page by id
router.get("/:id", async (req, res) => {
  try {
    const page = await pageModel.findById(req.params.id);
    res.send(page);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete page
router.delete("/:id", async (req, res) => {
  try {
    const deletedPage = await pageModel.findByIdAndRemove(req.params.id);
    res.send(deletedPage);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
