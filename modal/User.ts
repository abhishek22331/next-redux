import mongoose from "./db";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
    // name:String,
    email: String,
    // password: String,
//   seller:{
//   type:Boolean,
//   default:false}
},
{
  timestamps: true,
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;