import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    message: String,
    profileName: String,
    profileImage: String
})

const postSchema = mongoose.Schema({
    title: String,  
    creator: String,
    selectedFile: String,
    comments: [{
        data: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'commentSchema'
        }
    }],
    likeCount: {
        type: Number,
        default: 0,
    },
    shareCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var commentsSchema = mongoose.model('commentSchema', commentSchema);
var DatabaseSchema = mongoose.model('databaseSchema', postSchema);

export default DatabaseSchema;