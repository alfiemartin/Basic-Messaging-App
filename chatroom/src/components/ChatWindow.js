import React from "react";
import useFirestore from "../hooks/updateMessages";

const ChatWindow = (props) => {
  const { docs } = useFirestore("messages");
  console.log(docs);

  setTimeout(function () {
    let nextPos = document.querySelector(".chat-window").scrollHeight;
    document.querySelector(".chat-window").scroll({
      top: nextPos,
      behavior: "smooth",
    });
  }, 100);

  return (
    <div className="chat-window">
      <div className="chat-wrapper">
        {docs &&
          docs.map((message) => {
            let classN = "other";
            if (message.username == props.userName) {
              classN = "me";
            }
            return (
              <div className={classN + " message-cont"} key={message.id}>
                <div className={classN + " message-wrapper"}>
                  <p>{message.username + ": " + message.message}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChatWindow;
