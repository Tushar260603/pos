const bodyParser = require('body-parser')
const express=require('express')
const morgan =require('morgan')
const cors =require('cors')
const path=require('path')
const dotenv=require('dotenv')

require('colors')
const connectdb=require('./config/config')

dotenv.config()

connectdb();

const app=express();
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


app.use("/api/items",require("./routes/itemRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use("/api/bills",require("./routes/billRoute"))
const PORT=process.env.PORT || 8080

//serving frontend
app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",function(req,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

app.listen(PORT,()=>{
    console.log("server is running "+PORT)
})





