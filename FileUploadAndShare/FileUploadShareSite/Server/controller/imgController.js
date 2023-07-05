import File from '../controller/models/file.js';
import { request, response } from "express";

//export directly writing this as if we want to use this method in other file
//that time here in this file we've to export it
export const uploadImage = async (request, response) =>{
    const fileObj ={
        path:request.file.path,
        name: request.file.originalname
    }

    try{
        const file = await File.create(fileObj);
        response.status(200).json({path: `http://localhost:/8000/file/${file._id}`})
    }
    catch(error){
        console.log(error.message);
        response.status(500).json({error : error.message});
    }
}

export const getImage = async(request, response) => {
    try{
        const file = await File.findById(request.params.fileId);
        file.downloadCount++;
        await file.save();
        response.download(file.path, file.name);
    }
    catch(error){
        console.log(error.message);
        response.status(500).json({error : error.message});
    }
}