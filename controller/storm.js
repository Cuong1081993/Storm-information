const Storm = require("../model/Storm");

exports.getInformation = async (req, res, next) => {
  try {
    const city = req.query.city;
    const storms = await Storm.find({ city }).sort({ detectedTime: -1 });
    res.json({ storms });
  } catch (error) {
    res.status(500).json({ error: "Failed to get Storms information" });
  }
};
