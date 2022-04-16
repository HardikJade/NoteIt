// To Validate The Response Data
const { body, validationResult } = require('express-validator');
const express = require('express')
const router = express.Router();
const fetchUser = require('../middleware/FetchUser')
const Notes = require('../models/Notes')
// Route 1 Get All The Notes From The Database
router.get('/get-note',fetchUser,async (request,response)=>{
    try{
        const note_array = await Notes.find({user : request.data.user}).select("-user")
        response.status(200).json(note_array)
    }catch(e){
        response.status(400).json({"error" : {"type" : "Invalid Request"}})
    }
})

// Route 2 Add The Notes To The Database
router.post('/save-note',fetchUser,[
    body('title',"Enter The Valid Title").isLength({min : 3}),
    body('description',"Enter The Valid Description").isLength({min:3})
],async (request,response)=>{
    try{
        const error = validationResult(request);
        if(!error.isEmpty()){
            response.status(400).json({"error" : {"type" : "Invalid Request"}})
        }else{
            const {title,description,tag} = request.body;
            Notes.create({
                user : request.data.user,
                title : title,
                description : description,
                tag : tag
            }).then((item)=>{
                response.status(200).json({"error" : {"type" : "Success"},
                                            "id" :  item._id})
            })
            .catch(()=>{
                response.status(400).json({"error" : {"type" : "Failed To Save The Note"}})
            })

        }
    }catch(e){
        response.status(400).json({"error" : {"type" : "Invalid Request"}})
    }
})


//Rotue 3 To Update The Note
router.put("/update-note/:id",fetchUser,async (request,response)=>{
    try{
        const {title,description,tag} = request.body
        let note = await Notes.findById(request.params.id);
        if(note && (request.data.user == note.user.toString())){
            //Update The Note
            let newNote = {}
            if(title){newNote.title = title}
            if(description){newNote.description = description}
            if(tag){newNote.tag = tag}
            await Notes.findByIdAndUpdate(request.params.id,{$set: newNote},{new:true});
            response.status(200).json({"error" : {"type" : "Success"}})
        }
        else{
            response.status(400).json({"error" : {"type" : "Bad Request"}})
        }
    }catch(e){
        response.status(400).json({"error" : {"type" : "Bad Request"}})
    }
})

// Route 4 To Delete The Note
router.delete("/delete-note/:id",fetchUser,async (request,response)=>{
    try{
        let note = await Notes.findById(request.params.id);
        if(note && note.user.toString() === request.data.user){
            await Notes.findByIdAndDelete(request.params.id)
            response.status(200).json({"error" : {"type" : "Success"}})
        }
        else{response.status(400).json({"error" : {"type" : "Bad Request"}})}
    }
    catch(e){
        response.status(400).json({"error" : {"type" : "Bad Request"}})
    }
})
module.exports = router;
