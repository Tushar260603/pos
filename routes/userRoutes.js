const express =require('express')
const {logincontroller,registerController
} = require('../controllers/userController')


const router=express.Router()


//method-get
router.post('/login',logincontroller)


//method-post

router.post("/register",registerController)







module.exports=router





