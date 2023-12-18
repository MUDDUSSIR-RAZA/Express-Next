const Users = require("../model/db/users");

exports.createUser = async (email, password) => {
  try {
    const user = new Users({
      email: email,
      password: password,
    });
    const resp = await user.save();
    console.log(resp , "log");
    return "User Successfully SigUp!"
  } catch (err) {
    throw err;
  }
};

exports.findUser = async (email) => {
  try {
    return await Users.findOne({ email });
  } catch (err) {
    throw err;
  }
};
