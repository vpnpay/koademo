 
const mongoose = require("./db")
 
// 定义模型  
const Cat = mongoose.model('Cat', { name: String });  

const catSchema = new mongoose.Schema({
    name:String
})
 
 
const catModel = mongoose.model("cat",catSchema,"cat")
 
module.exports = catModel