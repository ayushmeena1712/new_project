import jwt from "jsonwebtoken";

export const createJwt = (data) => {
  return jwt.sign(
    {
      data: data,
    },
    process.env.JWTSECRET,
    { expiresIn: "2h" }
  );
};

export const verifyJwt = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
 
export const generateAccessToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
};

export const generateRefreshToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};


