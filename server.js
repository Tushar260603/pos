const bodyParser = require('body-parser')
const express=require('express')
const morgan =require('morgan')
const cors =require('cors')

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

// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"))
// }

app.use("/api/items",require("./routes/itemRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use("/api/bills",require("./routes/billRoute"))
const PORT=process.env.PORT || 8080



app.listen(PORT,()=>{
    console.log("server is running "+PORT)
})





