const jwt = require("jsonwebtoken");

function validateUser(req, res, next) {
  const jwtSecret = process.env.SECRET_JWT;
  // Check if the authorization header exists and starts with 'Bearer '
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return res.status(401).json({
      message: "Authorization header missing or incorrect format.",
    });
  }

  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message: "Please Login !!!",
    });
  } else {
    jwt.verify(token, jwtSecret, (error, decodedString) => {
      if (error) {
        res.status(401).json({
          message: "Login !!! with correct password",
        });
      } else {
        const username = decodedString.username;
        const userId = decodedString.userId;
        console.log("payload:", decodedString);
        (req.username = username), (req.userId = userId);

        next();
      }
    });
  }
}

module.exports = { validateUser };
