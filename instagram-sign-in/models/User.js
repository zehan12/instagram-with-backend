const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    details: Object
}, { timestamps: true }
)

module.exports = mongoose.model( "User", userSchema );