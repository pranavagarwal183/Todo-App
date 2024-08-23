const express=require("express");
const {createTodo,updateTodo}=require("./types");
const {todo}=require("./db");
const app=express();
const cors =require("cors");
app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
    const createPayload =req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Sorry! You have sent the wrong input",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"Hurray! Todo is created"
    })
})

app.get("/todos",async function(req,res){
     const todos= await todo.find({});
     res.json({
        todos
     })
})

app.put("/completed",async function(req,res){
    const updatePayload =req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    if(!parsedPayload.sucess){
        res.status(400).json({
            msg: "Sorry! You have sent the wrong input",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Kudos! You have completed the task"
    })
})

app.listen(3000);