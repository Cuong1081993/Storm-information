const User = require("../model/User");
exports.register = async (req, res, next) => {
  try {
    const { userName, password, email } = req.body;
    const user = await User.create({ userName, password, email });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = await User.find({ userName, password });
    if (user) {
      res.json({ user });
    } else {
      res.status(401).json({ error: "User invalid !" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};
