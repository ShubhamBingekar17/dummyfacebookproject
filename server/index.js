import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './components/Routes.js';

const app = express();
dotenv.config();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

app.use('/post' , postRoutes);

app.use('/' , (req, res) => {
    res.send('Hello to Memories APi');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => app.listen(PORT , () => console.log(`Server running on PORT : ${PORT}`)))
    .catch((error) => console.log(error.message));
