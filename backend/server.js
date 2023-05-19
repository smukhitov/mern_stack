require('dotenv').config()
const express = require('express');



//Express app
const app = express();

// middleware registration
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next()
})


// Root
app.get('/', (req, res)=>{
   res.json({message: 'Welcome to the app!'}) 
})

//

// listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT);
})


