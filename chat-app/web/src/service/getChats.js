import axios from "axios";

const URL = "http://localhost:8000";

async function getChats(){
    try {
        const { data } = await axios.get(`${URL}/get-chats`, { withCredentials: true });

        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export default getChats;