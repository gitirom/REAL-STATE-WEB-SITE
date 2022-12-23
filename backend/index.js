import express  from "express"; //just add "type": "module", in packjson
import mysql  from "mysql"; 

const app=express()// creation express app 






app.listen(3001, () => {
    console.log("connected to backend ")
})