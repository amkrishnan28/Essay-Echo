const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promptSchema = new Schema({
    prompt: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    }
}, {timestamps: true}
)

const Prompt = mongoose.model('Prompt', promptSchema);
module.exports = Prompt;