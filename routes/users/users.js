const users = require("express").Router()


const usersObject = [
{
    username: "Kevin Brutus",
    email: "kevin@brutus.com",
    activationDate: "January 1, 2018"
},
{
    username: "Jane Doe",
    email: "Jane@brutus.com",
    activationDate: "January 1, 2000"
}
]

users.get("/",(req,res)=>{
    res.send(usersObject)
})

users.get("/:id",(req,res)=>{
let newUsers = []
usersObject.forEach((el)=>{
newUsers.push(el[req.params.id])    
})
res.json(newUsers)
    })


users.get("/:test",(req,res)=>{
    res.json(usersObject)
})

users.post("/:id",(req,res)=>{
    res.send(req.params.id)
    // newUsers.push(req.body)
    // res.json(req.body)
})

users.put("/user/username",(req,res)=>{
    
    res.json(req.query)
 
})




module.exports = users