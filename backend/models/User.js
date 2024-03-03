const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Prompt = require("./Prompt.js")

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    essayPrompts: [{
        type: Schema.Types.ObjectId,
        ref: 'Prompt'
    }]
}, {timestamps: true}
)

const User = mongoose.model('User', userSchema);
module.exports = User;