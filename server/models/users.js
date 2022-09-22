const mongoose = require(`mongoose`);

const UserSchema = mongoose.Schema([
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passportID: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
  },
]);

const User = mongoose.model(`user`, UserSchema);
module.exports = User;
