const userModel =require("../models/userModel")


//login user
const logincontroller= async (req,resp)=>{
try {
    const {userId,password}=req.body
  const user=  await userModel.findOne({userId,password,verified:true})
  if(user){
    resp.status(200).send(user)
  }
  else{
resp.json({
message:"Login fail",
user

})
  }

} catch (error) {
    console.log(error)
}




}


//register user

const registerController=async(req,resp)=>{
try {
    const newuser=new userModel({...req.body,verified:true});
    await newuser.save();
    resp.status(201).send("New user added successfully")
} catch (error) {
    resp.status(400).send("error",error)
    console.log(error)
}

}






module.exports={logincontroller,registerController}
