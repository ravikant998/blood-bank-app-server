const express=require("express")
const authMiddelware = require("../middleware/authMiddelware")
const { getDonarListController, getHospitalDataController } = require("../controllers/adminController")
const adminMiddelware = require("../middleware/adminMiddelware")

//Router object
const router=express.Router()

// Routes
router.get('/donar-list',authMiddelware, adminMiddelware ,getDonarListController)
router.get('/hospital-list',authMiddelware, adminMiddelware ,getHospitalDataController)


// EXPORT

module.exports=router