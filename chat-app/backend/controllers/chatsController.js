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

        const result = [...senderEnd, ...recieverEnd];

        for (let i = 0; i< result.length; i++){
            const element = result[i];

            if (element.person1.equals(user._id)){
                const secondPerson = await Users.findOne({ _id: element.person2 });

                const newElement = {
                    _id: secondPerson._id,
                    name: secondPerson.name,
                    username: secondPerson.username,
                    image: secondPerson.image,
                    last_time: element.last_time,
                    last_mes: element.last_mes.length > 20 ? element.last_mes.substring(0, 20) + "..." : element.last_mes
                }

                result[i] = newElement;
            }
            else {
                const secondPerson = await Users.findOne({ _id: element.person1 });

                const newElement = {
                    _id: secondPerson._id,
                    name: secondPerson.name,
                    username: secondPerson.username,
                    image: secondPerson.image,
                    last_time: element.last_time,
                    last_mes: element.last_mes.length > 20 ? element.last_mes.substring(0, 20) + "..." : element.last_mes
                }

                result[i] = newElement;
            }
        }

        return response.status(200).json(result);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export {
    getChats
}