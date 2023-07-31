import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    usernames: {
        type: String,
        required: [true, "please provide your username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "please provide your email"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "please provide your password"]
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: String
})

// let userModel;

// // Check if the model has been compiled before
// if (mongoose.models.users) {
//   userModel = mongoose.model('users');
// } else {
//   userModel = mongoose.model('gaur', userSchema);
// }

// export default userModel;

const User = mongoose.model.users;

export default User;


// || mongoose.model("yash" , userSchema);