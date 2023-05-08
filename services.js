const express =require('express')
const servicesRouter=express.Router()
servicesRouter.get('/',(request,response)=>{
    response.send("This is Services page")
})
module.exports=servicesRouter