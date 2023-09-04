const express =require('express')
const { addbillsController,getBillscontroller
} = require('../controllers/billscontroller')


const router=express.Router()





//method-post

router.post("/add-bills",addbillsController)


//method get

router.get("/get-bills",getBillscontroller)


module.exports=router



