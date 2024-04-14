const express=require('express');
const router=express.Router();
const menuItem=require('./../models/menu');

router.post('/',async(req,res)=>{
    try{
    // Assuming the request body contains the menu data 
    const menuData=req.body 

    // create a new person document using the mongoose model
    const newMenu=new menuItem(menuData); 
    
    // save the new person to the database
   const response=await newMenu.save();
   console.log("data saved");
   res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})
// get method to get the menuItem
router.get('/',async(req,res)=>{
    try{
        const menuData= await menuItem.find();
        console.log('data fetched');
        res.status(200).json(menuData);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})

    }
})
router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType; // Extract the taste type from the URL parameter
    if(tasteType=='sweet'|| tasteType=='sour'|| tasteType=='bitter'){
        const response=await menuItem.find({taste: tasteType})
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
// update data

router.put('/:id',async(req,res)=>{
    try{
        const menuId=req.params.id; // Extract the id from the URL parameter
        const updateMenuData=req.body; // Updated data for the person

        const response=await menuItem.findByIdAndUpdate(menuId,updateMenuData,{
            new:true,  // Return the updated document
            runValidators:true, // Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'menu not found'})
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});


    }
    
})
// data deleted

 // delete record
 router.delete('/:id',async(req,res)=>{
    try{
        const menuId=req.params.id; // Extract the person's ID from the URL parameter
        const response=await menuItem.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error: 'menuItem not found'})
        }
        console.log('data deleted');
        res.status(200).json({message:'menuItem deleted successfullly'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

 })

module.exports=router;
