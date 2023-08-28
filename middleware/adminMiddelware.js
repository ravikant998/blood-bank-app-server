const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);
    // cheack admin
    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth failed",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error", error);
    return res.status(401).send({
      success: false,
      message: "Auth failed,Admin API",
    });
  }
};
