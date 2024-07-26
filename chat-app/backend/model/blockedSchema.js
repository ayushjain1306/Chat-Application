import mongoose from "mongoose";

const blockedSchema = new mongoose.Schema({
    blocked_by: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    blocked_one: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
});

const BlockList = mongoose.model("blocklist", blockedSchema);

export default BlockList;