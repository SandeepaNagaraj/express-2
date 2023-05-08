
const express =require('express')
const userRouter = express.Router()
const listofUsers =[
    {
        'id':1,
        'name':'web development'
    },
    {
        'id':2,
        'name':'cyber security'
    },
    {
        'id':3,
        'name':'Data Science'
    },
    {
        'id':4,
        'name':'Machine Learning'
    }
]
userRouter.get('/',(request,response)=>{
response.send('This is list of users')
})
userRouter.get('/:id([0-9]{1})',(request,response)=>{
    const pageId=Number(request.params.id)

    const userId =listofUsers.find((user)=> user.id ===pageId)
    if(!userId){
        response.send('page not found')
    }
    else{
        response.json(userId.name)
    }

})
module.exports = userRouter
