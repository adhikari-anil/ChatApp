import React from "react";
import { useState, useEffect, useCallback } from "react";
import { io } from "socket.io-client";
import { chatStore } from "../state/store";

const socket = io.connect("http://localhost:5000"); // anyone between them...

function Chats() {
  const [message, setMessage] = useState(""); // this is for the actual message from the user..
  const user = localStorage.getItem("user");

  const { chats, setChats } = chatStore();

  const sendChat = useCallback(
    (e) => {
      e.preventDefault();
      if (message.trim()) {
        socket.emit("chat", { message, user });
        setMessage("");
      }
    },
    [message]
  );

  useEffect(() => {
    const handleChat = (payload) => {
      setChats(payload);
    };

    socket.on("chat", handleChat);

    return () => {
      socket.off("chat", handleChat);
    };
  }, [setChats]);

  return (
    <>
      <div className="p-5 w-screen h-auto flex justify-center items-center md:justify-center lg:justify-center">
        <div className="flex flex-col lg:w-1/2 md:w-full justify-between shadow-custom-yellow">
          <div>
            <header className="p-4 text-center h-20 text-2xl">
              <h1> PRIVATE INBOX </h1>
            </header>
          </div>
          <div className="flex p-2 justify-center flex-col">
            {chats.map((payload, index) => {
              const alignmentClass =
                payload.user === user ? "justify-end" : "justify-start";
              return (
                <div
                  key={index}
                  className={`flex p-5 w-auto overflow-auto ${alignmentClass}`}
                >
                  <div className="border-4 rounded-full p-3">
                    <p className="w-5 h- text-center">{payload.user.split("")[0]}</p>
                  </div>
                  <div className="p-2 text-lg font-serif flex justify-center items-center">
                    {`${payload.message}`}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <form onSubmit={sendChat} className="p-4 flex flex-row gap-5 ">
              <input
                type="text"
                name="chat"
                className="h-12 p-3 font-sans text-lg border-3 rounded-md shadow-custom-yellow"
                placeholder="Type your message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                type="submit"
                className="h-12 w-20 rounded-lg shadow-custom-yellow"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
