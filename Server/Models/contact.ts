// File Name : contact.ts
// Student's Name : Yerim Cho
// Student ID : 301143325
// Date : June 18th, 2021

import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

const ContactSchema = new Schema
({
    name: String,
    phone: String,
    email: String
},
{
    collection: "business"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;