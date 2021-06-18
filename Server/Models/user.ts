//connect to Mongo DB

import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; //alias for Schema
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    username:String,
    emailAddress: String,
    displayName: String,
    created: 
    {
        type:Date,
        default: Date.now()
    },
    updated: 
    {
        type:Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("Contact",UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        name: String,
        phone: String,
        email: String
    }
}
export default Model;