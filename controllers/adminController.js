const userModel = require("../models/userModel");
// GET DONAR LIST
const getDonarListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: donarData.length,
      message: "Donar list fetch successfully",
      donarData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in donar list",
      error,
    });
  }
};
// HOSPITAL LIST
const getHospitalDataController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      Totalcount: hospitalData.length,
      message: "Hospital list fetch successfully",
      hospitalData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in hospital list",
      error,
    });
  }
};
module.exports = { getDonarListController, getHospitalDataController };
