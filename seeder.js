const mongoose=require('mongoose')
const dotenv=require('dotenv')
const connectdb=require('./config/config')

const itemModel=require('./models/itemModel')

const items=require('./utils/data')

dotenv.config()
connectdb()

const importdata=async()=>{
    try {
        await itemModel.deleteMany()
        const itemsdata=await itemModel.insertMany(items)
        console.log("All items added")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}



importdata();








