const router = require("express").Router();
const loginController = require("../controllers/loginController");
const userController = require("../controllers/usersController");

router.post("/", async (req, res) => {
  try {
    const emailCheck = req.body.email;
    const passwordCheck = req.body.password;
    let token = await loginController.validate(emailCheck, passwordCheck);

    if (token) {
      let user = await userController.findByEmail(emailCheck);
      res.status(200).json({ token, user });
    } else {
      console.log("no va el login");
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
