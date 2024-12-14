<<<<<<< HEAD
class User {
  constructor(data) {
    this.email = data.email;
    this.username = data.username;
    this.image = data.image;
    this._id = data._id;
    this._rev = data._rev;
  }
}
=======
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f

export default User;