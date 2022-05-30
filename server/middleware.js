// var jwt = require("jsonwebtoken");
// const User = require("../models/UserSchema");

import jwt from 'jsonwebtoken';
import User from './models/user.model.js';

const isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access Denied, No token provided");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const rootUser = await User.findById(decoded._id);
    if (rootUser) {
      req.user = rootUser;
    //   console.log(rootUser,"in the middleware!");
      next();
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
};


const isAdmin = async (req,res,next) => {
  if(req.user?.isAdmin){
    next();
  }else{
    return res.status(500).send("Access Denied!")
  }
}


const authenticate ={
    isLoggedIn,
    isAdmin
}

export default authenticate;