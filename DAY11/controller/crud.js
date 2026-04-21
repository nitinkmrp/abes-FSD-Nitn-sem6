import User from '../models/User.js';

export const createUser = async (req,res,next) => {
    try {
        
        const createdUser = await User.create(req.body);
        res.status(200).json({ data: createdUser, message: "user has been registered successfully" })
    } catch (error) {
        next(error);

    }
}


export const readUser = async (req,res,next) => {
    try {
        const user = await User.findOne({ email: req.params.email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            data: user,
            message: "User fetched successfully"
        });

    } catch (error) {
       next(error);
    }
};


export const readUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        res.status(200).json({ data: users, message: "successfull" })
    } catch (error) {
        next(error);

    }
}


export const updateUser = async (req,res,next) => {
    try {
        await User.updateOne({ email: req.query.email }, { $set: req.query });
        res.status(200).json({message: "user has been upated successfully"});
    } catch (error) {
        next(error);
    }
}


export const deleteUser = async (req,res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ email: req.params.email });
         deletedUser ? res.status(200).json({data:"deleteUser ",message:"successfull"}): 
        res.status(400).json({message: "user is not existing "});
    } catch (error) {
        next(error);
    }
}

// deleteUser("xyz@gmail.com");