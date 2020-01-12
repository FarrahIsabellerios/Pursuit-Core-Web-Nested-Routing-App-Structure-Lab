const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = 3000;
//importing routers
const recipesRouter = require("./routes/recipes/recipes.js")
const usersRouter = require("./routes/users/users.js")
//middleware attaching
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/recipes",recipesRouter)
app.use("/users",usersRouter)

app.get("/",(req,res)=>{
res.json("Live and Running")
})

app.listen(port,()=>{
    console.log("youre runnin on port", port)
})