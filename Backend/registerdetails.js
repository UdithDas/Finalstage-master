const mongoose=require("mongoose")

let sc=mongoose.Schema;
const registerschema = new sc(
{
restuarantid:String,    
restuarant:String,
cuisine:String,
type:String,
rating:String,
contactno:Number,
manager:String,
nooftables:Number,
country:String,
state:String,
district:String,
userid:String,
password:String,
status:String
}
);
var registermodel =mongoose.model("register",registerschema)
module.exports=registermodel;