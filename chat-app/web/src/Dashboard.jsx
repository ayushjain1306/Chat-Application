import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideContent from "./Components/Sidebar/Sidebar.jsx";
import OptionsBar from "./Components/options/OptionsBar.jsx";
import { useNavigate } from "react-router-dom";
import { getUserData } from "./service/userData.js";

const divStyle = {
    backgroundColor: "rgb(9 141 247)",
    height: "100vh",
    width: "100vw",
    display: "flex"
}

const outletDiv = {
    // padding: "20px"
}

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const validateUser = async() => {
            const userData = await getUserData();
    
            if (!userData){
                navigate("/");
            }
        }
        validateUser();
    }, [navigate]);

    return (
        <div style={divStyle}>
            <div>
                <OptionsBar />
            </div>
            <div>
                <SideContent />
            </div>
            <div style={outletDiv}>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;