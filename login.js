const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("This is Login Page")
})
module.exports=router