import express from 'express';
import mongoose from 'mongoose';

import DatabaseSchema from './Model.js';
import UserSchema from './UserModal.js';

const router = express.Router();

export const getUser = async (req , res) => {
    try {
        const userData = await UserSchema.find();

        res.status(200).json(userData)
    } catch (error) {
        res.status(404).json({ message: error });
    }
} 

export const getPosts = async (req, res) => { 
    try {
        const databaseMessage = await DatabaseSchema.find();

        res.status(200).json(databaseMessage);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await DatabaseSchema.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new DatabaseSchema({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await DatabaseSchema.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const addComment = async (req, res) => {
    const { id } = req.params;
    const {comment: {profileName , profileImage, message}} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { comment: {profileName , profileImage, message } , _id: id };

    await DatabaseSchema.findByIdAndUpdate(id, addComment, { new: true });

    res.json(addComment);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await DatabaseSchema.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await DatabaseSchema.findById(id);

    const updatedPost = await DatabaseSchema.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;