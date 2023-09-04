const itemModel =require('../models/itemModel')



//get items

const getitemcontroller= async (req,resp)=>{
try {
    const items=await itemModel.find()
    resp.status(200).send(items)
} catch (error) {
    console.log(error)
}

}


//add-items

const additemController=async(req,resp)=>{
try {
    const newitem=new itemModel(req.body);
    await newitem.save();
    resp.status(201).send("Item created successfully")
} catch (error) {
    resp.status(400).send("error",error)
    console.log(error)
}

}




//update item

const edititemcontroller=async(req,resp)=>{
try {
   
    await itemModel.findOneAndUpdate({_id: req.body.itemId},req.body);
resp.status(201).send("Item Updated !");
} catch (error) {
    resp.status(400).send(error)
    console.log(error)
}
}

//delte item

const deleteitemcontroller = async(req,resp)=>{
    try {
       
const {itemId}=req.body

await itemModel.findOneAndDelete({_id:itemId})
resp.status(200).json("item Deleted")
    } catch (error) {
        resp.status(400).send(error)
        console.log(error)
    }
    }

module.exports={getitemcontroller,additemController,edititemcontroller,deleteitemcontroller}
