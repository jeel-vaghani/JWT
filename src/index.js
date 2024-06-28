const express = require("express");
const connectdb = require("./db/dbconnection");
const router = require("./routes/v1");

const app = express();

app.listen(5000,
    ()=>{
        console.log("server running.. ");
    }
)

app.use(express.json())
app.use("/v1",router)
connectdb()

    