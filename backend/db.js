const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://agarwalpranav177:admin12345@pranavaga.mix40.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}

