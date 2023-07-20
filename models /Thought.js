const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minlenght: 1, 
        maxlenght: 280
        
    },
    createdAt: {
        type: Date,
        default: Date.now,

        
    },
    username: [{
        type: String,
        required: true,
    }],
    reactions: []
  },
  {
    
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);