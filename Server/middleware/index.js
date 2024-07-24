import jwt from 'jsonwebtoken';

const authToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: "Please Login...!",
      error: true,
      success: false
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Failed to authenticate token.",
        error: true,
        success: false
      });
    }

    req.userId = decoded.id;
    next();
  });
};

export default authToken;
