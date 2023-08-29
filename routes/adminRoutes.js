const express=require("express")
const authMiddelware = require("../middleware/authMiddelware")
const { getDonarListController, getHospitalDataController, getOrgDataController } = require("../controllers/adminController")
const adminMiddelware = require("../middleware/adminMiddelware")

//Router object
const router=express.Router()

// Routes
router.get('/donar-list',authMiddelware, adminMiddelware ,getDonarListController)
router.get('/hospital-list',authMiddelware, adminMiddelware ,getHospitalDataController)
router.get('/org-list',authMiddelware, adminMiddelware ,getOrgDataController)



// EXPORT

module.exports=router