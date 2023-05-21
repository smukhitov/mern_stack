require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')

//Express app
const app = express();


// middleware registration
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next()
});

app.use(express.json())

//routes
app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT);
})
