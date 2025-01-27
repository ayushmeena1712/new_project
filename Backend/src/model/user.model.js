import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,  
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        unique: true, 
    },
    refreshToken: {
        type: String,
        default: null,
    },
    isVerifiedEmail: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
    },
    verificationTokenExpires: {
        type: Date,
    },
    otp: {
        type: String,
    },
    otpExpires: {
        type: Date,
    },
    isPhoneVerified: { type: Boolean, default: false },
  },
  {
      timestamps: true
  }
);

export const User = mongoose.model("User", userSchema);
