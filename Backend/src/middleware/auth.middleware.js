import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';
 
export const verifyJWT = async (req, res, next) => {
  try {
    console.log("Middleware verify JWT");
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    console.log('req.cookies = ', req.cookies);
    console.log('req.header = ', req.header('Authorization'));
    console.log('token = ', token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id).select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({ message: "Invalid Access Token" });
    } 
    req.user = user;
    console.log("Middleware moving to next page");
    next();
  } catch (error) {
    console.error("Error Message: ", error.message);
    return res.status(403).json({ message: error.message || "Invalid access token" });
  }
};