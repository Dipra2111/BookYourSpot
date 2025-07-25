import jwt from "jsonwebtoken";

export const adminverifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ADMIN);

    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });

    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    console.log("Error in admin verifyToken ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
