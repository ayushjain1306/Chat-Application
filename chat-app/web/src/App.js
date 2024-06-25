import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountWork from './Components/account/Accounts';
import Loader from "./Loader.jsx";
import Dashboard from './Dashboard.jsx';
import Default from './Components/default/DefaultPage.jsx';
import Chatting from './Components/chatting/Chatting.jsx';
import PersonProvider from './context/secondPerson.js';
import ChatsProvider from './context/chatsContext.js';

function App() {
  return (
    <PersonProvider>
      <ChatsProvider>
        <BrowserRouter>
          <Loader />
          <Routes>
            <Route path='/' element={<AccountWork />} />
            <Route path='/account' element={<Dashboard />}>
              <Route index element={<Default />} />
              <Route path='chatting' element={<Chatting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChatsProvider>
    </PersonProvider>
  );
}

export default App;
