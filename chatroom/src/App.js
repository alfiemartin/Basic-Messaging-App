import React, { useState } from "react";
import { projectStorage, projectFirestore, timestamp } from "./firebase/config";

import MessageBar from "./components/MessageBar";
import ChatWindow from "./components/ChatWindow";

import "./index.css";
import EnterName from "./components/EnterName";

function App() {
  const [userName, setUserName] = useState(null);
  return (
    <div className="App">
      <EnterName setUserName={setUserName} userName={userName} />

      <ChatWindow userName={userName} />
      <MessageBar userName={userName} />
    </div>
  );
}

export default App;
