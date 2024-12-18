import Messages from "../model/messageSchema.js";
import Users from "../model/userSchema.js";

async function deleteMessage(request, response){
    try {
        const user = await Users.findOne({username: request.username});

        if (!user){
            return response.status(404).json({message: "User Not Found."});
        }

        const { messageId } = request.headers;

        const message = await Messages.findOne({_id: messageId});

        if (message.delete_status){
            await Messages.deleteOne({_id: messageId});
        }
        else {
            await Messages.updateOne({_id: messageId}, {delete_status: user._id});
        }

        return response.status(200).json({message: "Message Deleted Successfully."});
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export {
    deleteMessage
}