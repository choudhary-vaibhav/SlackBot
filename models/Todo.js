//Collection Structure
const { SchemaTypes } = require('mongoose');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    user_id: {
        type: SchemaTypes.String,
        trim: true,
        required: true,
    },
    tasks: {
        type: [{
            desc: {
                type: SchemaTypes.String,
                trim: true,
                required: true,
            }
        }],
        default: [],
        required: true,
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;