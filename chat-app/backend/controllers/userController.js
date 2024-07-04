import Users from "../model/userSchema.js";

async function getUserDetails(request, response) {
    try {
        const username = request.username;

        const user = await Users.findOne({username});

        return response.status(200).json(user);
    }
    catch (error){
        return response.status(500).json({message: error.message});
    }
}

export {
    getUserDetails
}