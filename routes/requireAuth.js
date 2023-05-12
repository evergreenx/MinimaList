const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  //   console.log(req , 'req')

  const JWT_SECRET = "mysecretkey";

  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const tokenx = token.split(" ")[1];

  //   else {
  // console.log(token, "token");

  // const decoded = jwt.verify(tokenx, JWT_SECRET);

  // console.log(decoded, "detoken");
  //   }

  try {
    const decoded = jwt.verify(tokenx, process.env.JWT_SECRET);

    // console.log(decoded, "decodedsssxx");
    req.user = decoded;
    return next();
  } catch (err) {
    // console.log(err);
    return res.status(401).json({ message: "Authentication failed" });
  }
};

// Protected resource route

module.exports = requireAuth;
