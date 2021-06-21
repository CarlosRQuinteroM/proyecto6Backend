const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

//CRUD

// http://localhost:3000/movies/

router.get("/", async (req, res) => {
  try {
    res.json(await moviesController.findTopRated());
  } catch (err) {
    return res.status(500).json({
      mensaje: err.mensaje,
    });
  }
});
// http://localhost:3000/movies/id
router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    res.json(await moviesController.searchById(id));
  } catch (err) {
    return res.status(500).json({
      mensaje: err.mensaje,
    });
  }
});
// http://localhost:3000/movies/search/gladiator
router.get("/search/:query", async (req, res) => {
  try {
    let query = req.params.query;
    res.json(await moviesController.searchByTitle(query));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// http://localhost:3000/movies/genre/''genre"
router.get("/genre/:nombre", async (req, res) => {
  try {
    let nombre = req.params.nombre;
    res.json(await moviesController.searchByGenre(nombre));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/actor/:personId", async (req, res) => {
  try {
    let personId = req.params.personId;
    res.json(await moviesController.searchByPerson(personId));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
