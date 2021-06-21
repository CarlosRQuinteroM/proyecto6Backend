const router = require("express").Router();
const seriesController = require("../controllers/seriesController");

// get
// http://localhost:3000/series

router.get("/", async (req, res) => {
  try {
    res.json(await seriesController.findTopSeries());
  } catch (err) {
    return res.status(500).json({
      mensaje: err.mensaje,
    });
  }
});
// http://localhost:3000/series/id
router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.json(await seriesController.searchSeriesById(id));
  } catch (err) {
    return res.status(500).json({
      mensaje: err.mensaje,
    });
  }
});
// http://localhost:3000/movies/search/title
router.get("/search/:query", async (req, res) => {
  try {
    let query = req.params.query;
    res.json(await seriesController.searchByTitle(query));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
//http://localhost:3000/series/timeline/week
router.get("/timeline/:week", async (req, res) => {
  try {
    let week = req.params.week;
    res.json(await seriesController.searchByWeek(week));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
//http://localhost:3000/series/screened/id
router.get("/screened/:tvId", async (req, res) => {
  try {
    let tvId = req.params.tvId;
    res.json(await seriesController.searchByScreened(tvId));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
