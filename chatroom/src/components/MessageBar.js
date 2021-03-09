import React from "react";
import { useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

const uploadMessage = (userName) => {
  const collectionRef = projectFirestore.collection("messages");
  collectionRef.add({
    username: userName,
    uploadTime: timestamp(),
    message: document.querySelector(".message-box").value,
  });
};

const MessageBar = (props) => {
  return (
    <div className="message-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (props.userName) uploadMessage(props.userName);
          document.querySelector(".message-box").value = "";
        }}
      >
        <input className="message-box"></input>
        <button>send</button>
      </form>
    </div>
  );
};

export default MessageBar;
