const express = require("express");
const router = express.Router();

module.exports = router;

//ANCHOR GET | root
router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's the root" });
});

//ANCHOR POST | create a user
router.get("/signup", async (req, res) => {
  // const { firstName, lastName, password, notifications, email } = req.body;
  // const newUser = new User({
  //     firstName: firstName,
  //     lastName: lastName,
  //     password: password,
  //     notifications: notifications,
  //     email: email
  // })
  // const userAdded = new User(newUser)
  // userAdded.save()
  // .then(result=>{
  //     res.json({message: `New user ${firstName}, has been added to the db.`})
  // }).catch(err=>{
  //     res.json({err: err})
  // })
  res.status(200).json({ message: "It's the root from post " });

});
