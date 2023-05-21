const mongoose = require('mongoose')

// Mongoose allows to create a schem, mongodb alone is schemaless

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        reuiqred: true
    },
    reps:{
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)