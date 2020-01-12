const recipes = require("express").Router();

const recipesArr = {
    recipes:{
   
   grilled: {
        name: "Grilled Cheese",
        ingredients: ["Bread","Cheese", "Butter"],
        directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
    }, 

fried: {
        name: "Spinach Omelet",
        ingredients: ["Eggs","Spinach", "Butter"],
        directions: "Preheat skillet over medium heat. Generously butter skillet. Mix eggs with spinach and pour until solid."
    },


}}



recipes.get("/",(req,res)=>{
    res.json(recipesArr)
})

recipes.post("/postrecipes",(req,res)=>{
    res.json("posting")
    res.json(req.body)
})

recipes.put("/recipes/recipes",(req,res)=>{
console.log(req.query)
})


module.exports = recipes



// const users = require('express').Router();
// const userPosts = require('./posts/userPosts.js');

// users.use("/:id/posts", userPosts)

// users.get("/", (req, res) => {
//     res.json("all users")
// })

// users.get("/:id", (req, res) => {
//     res.json("info for user " + req.params.id);
// })


// users.delete("/:id", (req, res) => {
//   res.json("deleted user " + req.params.id);
// });

// users.post("/", (req, res) => {
//   res.json("created a new user");
// });


module.exports = recipes;