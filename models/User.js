import * as Types from "mongoose";

const {Schema,model} = require('mongoose')

const schema = new Schema({
    first_name: {type:String, required: true},
    last_name: {type:String, required: true},
    country: {type:String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    about: {type: String},
    pin: {type: String},
    role: { type: Int32Array, required: true},
    image: {type: String},
    links: [{type: Types.objectId, ref: 'Link'}]
})

module.exports = model('User',schema)

