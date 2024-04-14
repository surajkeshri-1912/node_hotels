const express=require('express');
const router=express.Router();
const person=require('./../models/person')

router.post('/',async(req,res)=>{
    try{
    // Assuming the request body contains the person data 
    const data=req.body 

    // create a new person document using the mongoose model
    const newPerson=new person(data); 
    
    // save the new person to the database
   const response=await newPerson.save();
   console.log("data saved");
   res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})
// get method to get the person
router.get('/',async(req,res)=>{
    try{
        const data= await person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})

    }
})
router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType; // Extract the work type from the URL parameter
    if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
        const response=await person.find({work: workType})
        console.log('response fetched');
        res.status(200).json(response)

    }else{
        res.status(404).json({error: 'Invalid Work Type'})
    }
    }

    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})


    }
})
// data updation

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; // Extract the id from the URL parameter
        const updatePersonData=req.body; // Updated data for the person

        const response=await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,  // Return the updated document
            runValidators:true, // Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});


    }
    
})
 // delete record
 router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; // Extract the person's ID from the URL parameter
        const response=await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted successfullly'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

 })
module.exports=router;