const express =require('express')
const { getitemcontroller, additemController,edititemcontroller,deleteitemcontroller
} = require('../controllers/itemcontroller')


const router=express.Router()


//method-get
router.get('/get-item',getitemcontroller)


//method-post

router.post("/add-item",additemController)

//method-put

router.put('/edit-item',edititemcontroller)


//method-delete
router.post('/delete-item',deleteitemcontroller)
module.exports=router





