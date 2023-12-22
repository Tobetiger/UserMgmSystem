import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  role: {type: String, assign: ["admin", "regular"], default: "regular"},
  password: {type: String, required: true},
});

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default userSchema;