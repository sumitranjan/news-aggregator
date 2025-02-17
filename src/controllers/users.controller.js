const {
  userRegisterService,
  userLoginService,
} = require("../services/users.service");

async function createUser(req, res) {
  try {
    const { message, status } = await userRegisterService(req.body);
    res.status(201).json({ message, status });
  } catch (error) {
    res.json({
      message: "Something went wrong : " + error,
      status: 500,
    });
  }
}

async function loginUser(req, res) {
  try {
    const { message, status, userId, token } = await userLoginService(req.body);
    res.status(200).json({
      message,
      status,
      userId,
      token,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong : " + error,
      status: 500,
    });
  }
}

module.exports = {
  createUser,
  loginUser,
};
