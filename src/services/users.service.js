const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { users } = require("../data/in-memory-data");

async function userRegisterService(body) {
  try {
    const { username, password, email, preferences } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      userId: uuidv4(),
      username,
      password: hashedPassword,
      email,
      preferences,
    });
    return {
      message: "User created Successfully!!",
      status: 201,
    };
  } catch (error) {
    return {
      message: error.message || "An unexpected error occurred.",
      status: 500,
    };
  }
}

async function userLoginService(body) {
  try {
    // const secret = process.env.SECRET_JWT;
    const secret = process.env.SECRET_JWT;
    const { username, password } = body;
    const foundUser = users.find((user) => user.username === username);

    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (foundUser && validPassword) {
      const payload = {
        username,
        userId: foundUser.userId,
      };
      const authToken = jwt.sign(payload, secret, { expiresIn: 3600 });
      return {
        message: "Login success!!",
        userId: foundUser.userId,
        token: authToken,
        status: 200,
      };
    } else {
      return {
        status: 500,
        message: "Authencation Failed!",
      };
    }
  } catch (error) {
    return {
      message: "Authencation Failed",
      status: 500,
    };
  }
}

function getUserPreferencesService(userId) {
  try {
    const user = users.find((user) => user.userId === userId);
    const preferences = user.preferences;
    return {
      preferences,
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      status: 500,
    };
  }
}

function updateUserPreferencesService(preferences, userId) {
  try {
    const userIndex = users.findIndex((user) => user.userId === userId);
    if (userIndex === -1) {
      return {
        message: "User not found",
        status: 404,
      };
    }

    const preferencesToAdd = Array.isArray(preferences)
      ? preferences
      : [preferences];

    // Filter out already existing preferences
    const uniquePreferencessToAdd = preferencesToAdd.filter(
      (pref) => !users[userIndex].preferences.includes(pref)
    );

    if (uniquePreferencessToAdd.length === 0) {
      return {
        message: "No new preferences to add",
        status: 200, // 200 OK
      };
    }

    // Add new unique preferences
    users[userIndex].preferences.push(...uniquePreferencessToAdd);

    return {
      message: "User preferences updated successfully",
      status: 200, // 200 OK
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      status: 500, // 500 Internal Server Error
    };
  }
}

module.exports = {
  userRegisterService,
  userLoginService,
  getUserPreferencesService,
  updateUserPreferencesService,
};
