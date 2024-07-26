import React, { useState, useEffect } from "react";
import { getBlockedUsers } from "../../service/settingsAPI.js";
import profilePicture from "../../images/profilePic.jpg";

const divStyle = {
    height: "96vh",
    width: "66vw",
    margin: "2vh 2vw",
    backgroundColor: "white",
    borderRadius: "5px"
}

const headingStyle = {
    paddingTop: "4vh",
    width: "88%",
    margin: "auto"
}

const BlockedUsers = () => {
    const [blockedUsers, setBlockedUsers] = useState(null);

    useEffect(() => {
        const fetchBlockedUsers = async() => {
            const response = await getBlockedUsers();

            if (response){
                setBlockedUsers(response);
            }
        }

        fetchBlockedUsers();
    }, []);

    return (
        blockedUsers &&
        <div style={divStyle}>
            <h4 className="h2" style={headingStyle}>Blocked Users</h4>
            <hr style={{
                width: "88%",
                margin: "auto",
                marginTop: "2vh",
                border: "1px solid rgb(9 141 247)",
                padding: "0px",
                borderRadius: "10px"
            }} />

            <div>
                {
                    blockedUsers.length > 0 ?
                    <table className="table" style={{width: "88%", marginTop: "5vh"}}>
                        <tbody>
                            {
                                blockedUsers?.map((user) => {
                                    return (
                                        <tr>
                                            <td><img src={profilePicture} alt="profile-pic" style={{width: "30%"}} /></td>
                                            <td style={{width: "60%"}}>{user?.name}</td>
                                            <td style={{width: "30%"}}>
                                                <button className="btn btn-outline-primary">Unblock</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <div>
                        <h6 className="h6" style={{
                            width: "88%",
                            margin: "auto",
                            marginTop: "5vh",
                            textAlign: "center",
                            color: "grey"
                        }}>No User is in your BlockList.</h6>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlockedUsers;