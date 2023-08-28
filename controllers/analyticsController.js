const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");
// Get Blood Data
const bloodGroupDatailsController = async (req, res) => {
  try {
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
    const bloodGroupsData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);

    //GET Single blood Group
    await Promise.all(
        bloodGroups.map(async (bloodGroup) => {
          //COunt TOTAL IN
          const totalIn = await inventoryModel.aggregate([
            {
              $match: {
                bloodGroup: bloodGroup,
                inventoryType: "in",
                organisation,
              },
            },
            {
              $group: {
                _id: null,
                total: { $sum: "$quantity" },
              },
            },
          ]);
     
          //COunt TOTAL OUT
          const totalOut = await inventoryModel.aggregate([
            {
              $match: {
                bloodGroup: bloodGroup,
                inventoryType: "out",
                organisation,
              },
            },
            {
              $group: {
                _id: null,
                total: { $sum: "$quantity" },
              },
            },
          ]);

          //CALCULATE TOTAL
          const availabelBlood =
            (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

          //PUSH DATA
          bloodGroupsData.push({
            bloodGroup,
            totalIn: totalIn[0]?.total || 0,
            totalOut: totalOut[0]?.total || 0,
            availabelBlood,
          });
        })
      );
  
      return res.status(200).send({
        success: true,
        message: "Blood Group Data Fetch Successfully",
        bloodGroupsData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In Bloodgroup Data Analytics API",
        error,
      });
    }
  };
module.exports = { bloodGroupDatailsController };
