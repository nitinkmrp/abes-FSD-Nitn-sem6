import mongoose from "mongoose";

const loggedUserDetailsSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const LoggedUserDetails = mongoose.model("loggedUsers", loggedUserDetailsSchema);
export default LoggedUserDetails;