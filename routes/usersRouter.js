const router = require("express").Router();
const authenticate = require("../middleware/authenticate");
const usersController = require("../controllers/usersController");
const admin = require("../middleware/admin");

//CRUD
// Find all users
router.get("/", admin, async (req, res) => {
  try {
    res.json(await usersController.findAllUsers());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// Find users by email
router.get("/email/:email", async (req, res) => {
  try {
    let email = req.params.email;
    res.json(await usersController.findByEmail(email));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// Find users by ID
router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;

    res.json(await usersController.findByUserId(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// Create new user
router.post("/", async (req, res) => {
  try {
    const body = req.body;

    res.json(await usersController.newUser(body));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// Modify one User
router.put("/",authenticate, async (req, res) => { 
  try {
    const cuerpoDeDatos = req.body;
    res.json(await usersController.modifyUser(cuerpoDeDatos));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
// Delete Users
router.delete("/:id", admin, async (req, res) => { 
  try {
    const id = req.params.id;
    res.json(await usersController.deleteUser(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
