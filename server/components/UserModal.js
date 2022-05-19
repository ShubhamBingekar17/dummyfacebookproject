import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    username: String,  
    name: String,
    profile: String,
})

var UserSchema = mongoose.model('UserSchema', postSchema);

export default UserSchema;