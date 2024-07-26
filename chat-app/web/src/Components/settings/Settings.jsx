import React from "react";
import AccountSettings from "./AccountSettings";
import PrivacySettings from "./PrivacySettings";
import DeleteAccount from "./DeleteAccount";

const Settings = () => {
    return (
        <div style={{
            overflowY: "auto",
            height: "96vh",
            margin: "2vh 2vw",
            width: "66vw",
            backgroundColor: "white",
            borderRadius: "4px",
            padding: "4vh 3vw"
        }} id="settings-div">
            <h3 className="h3" style={{textAlign: "center"}}>Manage Your Profile Settings</h3>
            <AccountSettings />
            <PrivacySettings />
            <DeleteAccount />
        </div>
    )
}

export default Settings;