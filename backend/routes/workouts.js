const express = require('express')
const router = express.Router()

// get all workout
router.get('/', (req, res) => {
    res.json({message: 'Get all workouts'})
})

// get single workout
router.get('/:id', (req, res)=>{
    res.json({message: 'Get a single workout'})    
})

// post workout
router.post('/', (req, res) =>{
    
    res.json({mesage: 'post a new new workout'})
})

// delete
router.delete('/:id', (req, res) =>{
    res.json({message: 'delete a workout'})
})

// update workout
router.patch('/:id', (req, res) =>{
    res.json({mesage: 'update a workout'})
})


module.exports = router