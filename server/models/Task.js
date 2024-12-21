const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  belong: { type: String, enum: ["TODO", "IN_PROGRESS", "DONE"], required: true },  
  title: { type: String, required: true },
  description: { type: String, required: true },  
  status: { type: Boolean, required: true },  
});

module.exports = model('Task', TaskSchema);

