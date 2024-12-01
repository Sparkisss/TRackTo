const { Schema, model } = require('mongoose')

const Task = new Schema({
    title: {type: String, require: true},
    completed: {type: Boolean, require: true},
    status: {type: String, require: true},
})

module.exports = model('Task', Task)
