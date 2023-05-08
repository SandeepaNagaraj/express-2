
const express =require('express')
const userRouter = express.Router()
const listofUsers =[
    {
    
        'name':'web development'
    },
    {
        
        'name':'cyber security'
    },
    {
        
        'name':'Data Science'
    },
    {
    
        'name':'Machine Learning'
    }
]
userRouter.get('/',(request,response)=>{
response.send('This is list of users')
})
userRouter.get('/:id([0-9]{1})',(request,response)=>{
    response.send(request.user.name)
   // const pageId=Number(request.params.id)

    //const userId =listofUsers.find((user)=> user.id ===pageId)
   // if(!userId){
       // response.send('page not found')
  //  }
  //  else{
       // response.json(userId.name)
 //   }

})
userRouter.param('id',(request,response,next,id)=>{
    request.user=listofUsers[id-1]
    console.log(id);
    next()
})
module.exports = userRouter
