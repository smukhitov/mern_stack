const express = require('express');



//Express app
const app = express();

// Root
app.get('/', (req, res)=>{
   res.json({message: 'Welcome to the app!'}) 
})

//

// listen for requests
app.listen(4000, () =>{
    console.log('listening on port 4000!');
})