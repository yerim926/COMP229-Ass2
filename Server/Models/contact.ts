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