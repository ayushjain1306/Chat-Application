import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountWork from "./Components/account/Accounts";
import Loader from "./Loader.jsx";
import Dashboard from "./Dashboard.jsx";
import Default from "./Components/default/DefaultPage.jsx";
import Chatting from "./Components/chatting/Chatting.jsx";
import PersonProvider from "./context/secondPerson.js";
import ChatsProvider from "./context/chatsContext.js";
import UserProvider from "./context/userContext.js";
import { SocketProvider } from "./context/socketContext.js";
import Settings from "./Components/settings/Settings.jsx";
import BlockedUsers from "./Components/settings/BlockedUsers.jsx";
import Profile from "./Components/options/Profile.jsx";

function App() {
  return (
    <SocketProvider>
      <UserProvider>
        <PersonProvider>
          <ChatsProvider>
            <BrowserRouter>
              <Loader />
              <Routes>
                <Route path="/" element={<AccountWork />} />
                <Route path="/account" element={<Dashboard />}>
                  <Route index element={<Default />} />
                  <Route path="chatting" element={<Chatting />} />
                  <Route path="settings">
                    <Route index element={<Settings />} />
                    <Route path="blocked-users" element={<BlockedUsers />} />
                  </Route>
                  <Route path="your-profile" element={<Profile />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ChatsProvider>
        </PersonProvider>
      </UserProvider>
    </SocketProvider>
  );
}

export default App;
