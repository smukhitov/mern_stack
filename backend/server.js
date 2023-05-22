require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//Express app
const app = express();

// middleware registration
app.use(express.json())


app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next()
});

//routes
app.use('/api/workouts', workoutRoutes);


//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {        
        console.log('connected to MongoDB');
        
        // listen for requests once connection to Mongo is established
        app.listen(process.env.PORT, () =>{
            console.log('listening on port', process.env.PORT);
        })
    })
    .catch((error) =>{
        console.log(err);
    })
