import Users from "../model/userSchema.js";

async function findUserDetails(request, response){
    try {
        const username = request.headers.username;

        const result = await Users.find({ username: { $regex: username, $options: 'i' } }, "name username image");

        const filteredResult = result.filter(obj => obj.username !== request.username);

        if (result){
            return response.status(200).json(filteredResult);
        }
        else {
            return response.status(404).json({message: "No User Found"});
        }
    }
    catch(error){
        return response.status(500).json({message: error.message});
    }
}

export {
    findUserDetails
}