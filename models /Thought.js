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
    reactions: [ReactionSchema]
  },
  {
    
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const ReactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength:280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
  },
  {
      toJSON: {
        getters: true
      },
      _id: false
    }
  );