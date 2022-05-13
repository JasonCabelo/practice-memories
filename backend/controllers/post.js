const Message = require('../models/Message'); 
const mongoose = require("mongoose");
exports.getPost = async (req, res) => {
    try {
        const post = await Message.find();

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error });
        console.log(error);
    }
}
exports.createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Message(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
} catch (error) {
    res.status(409).json({ message: error });
}
}

exports.updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            res.status(404).send('No Post Found')
        }
        const updatedPost = await Message.findByIdAndUpdate(_id, { ...post,  _id}, { new: true });
        res.json(updatedPost);     
    } catch (error) {
        console.log(error);
    }

}
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return  res.status(404).send('No Post Found')
        }
        await Message.findByIdAndDelete(id);
    
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.log(error);
    }
}
exports.likePost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return  res.status(404).send('No Post Found')
        }
        const post = await Message.findById(id);
        const updatedPost = await Message.findByIdAndUpdate(id, {likeCount: post.likeCount+1}, {new: true});
    
        res.json(updatedPost);
    } catch (error) {
        console.log(error);
    }   
}