const express=require("express")
const authMiddelware = require("../middleware/authMiddelware")
const { getDonarListController } = require("../controllers/adminController")
const { getHospitalController } = require("../controllers/inventoryController")
const adminMiddelware = require("../middleware/adminMiddelware")

//Router object
const router=express.Router()

// Routes
router.get('/donar-list',authMiddelware, adminMiddelware ,getDonarListController)
router.get('/hospital-list',authMiddelware, adminMiddelware ,getHospitalController)


// EXPORT

module.exports=router