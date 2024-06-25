import Chats from "../model/chatSchema.js";
import Users from "../model/userSchema.js";

async function getChats(request, response){
    try {
        const username = request.username;

        const user = await Users.findOne({ username });

        if (!user){
            return response.status(404).json("User Not Found.");
        }

        const senderEnd = await Chats.find({ person1: user._id });
        const recieverEnd = await Chats.find({ person2: user._id });

        return response.status(200).json([...senderEnd, ...recieverEnd]);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export {
    getChats
}