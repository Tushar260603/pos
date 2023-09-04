const billsModel =require('../models/billsModel')



//add-items

const addbillsController=async(req,resp)=>{
try {
    const newbill=new billsModel(req.body);
    await newbill.save();
    resp.send("Bill created successfully")
} catch (error) {
    resp.send('Something went wrong in backend')
    console.log(error)
}

}

//get bills data

const getBillscontroller= async (req,resp)=>{
    try {
        const items=await billsModel.find()
        resp.send(items)
    } catch (error) {
        console.log(error)
    }
    
    }
    




module.exports={addbillsController,getBillscontroller}
