const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        
    },
    thoughts: [{
        type: Schema.Types.ObjectId
    }],
    friends: [{
        type: Schema.Types.ObjectId
    }]
  },
  {
    
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);