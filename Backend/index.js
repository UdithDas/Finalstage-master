// import express
const express=require("express")
const cors=require("cors")
//Initailizing
const app=new express();
const db=require("./Connection/Database")
const registermodel = require('./registerdetails');
const ratingmodel = require('./ratingdetails');
const typemodel = require("./type");
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
//Api Creation
app.get('/',(request,response)=>{
response.send("hai udith")
})
//For Submit button
app.post('/new',(request,response)=>{
console.log(request.body)
new registermodel(request.body).save();
response.send("Record Sucessfully Saved")
})
//Assign Port
app.listen(3005,(request,response)=>{
    console.log("Port is running in 3005")
    })
//for viewing
app.get('/view',async(request,response)=>{
        var data = await registermodel.find();
        response.send(data)
        })
//for delete
app.put('/remove/:id',async(request,response)=>{
            let id = request.params.id
            await registermodel.findByIdAndUpdate(id,{$set:{status:"INACTIVE"}})
            response.send("Record deleted")
            })    
            
app.put('/sedit/:id', async(request,response)=>{
    let id = request.params.id
    await registermodel.findByIdAndUpdate(id,request.body)
    response.send("Record Deleted")
})

//rating submit rate
app.post('/rate',(request,response)=>{
    console.log(request.body)
    new ratingmodel(request.body).save();
    response.send("Record Sucessfully Saved")
    })
 //type submit
 app.post('/type',(request,response)=>{
    console.log(request.body)
    new typemodel(request.body).save();
    response.send("Record Sucessfully Saved")
    })
// for retriving data

    app.get("/rview",async(request,response)=>{
        const result = await ratingmodel.aggregate([
            {
              $lookup: {
                from: 'registers', // Name of the other collection
                localField: 'rating', // field of item
                foreignField: '_id', //field of category
                as: 'stud',
              },
            },
          ]);
          response.send(result)
        })
//for type
app.get("/tview",async(request,response)=>{
    var data=await typemodel.find();
    response.send(data);
})