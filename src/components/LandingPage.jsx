import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Images/chatpics.png";

function LandingPage() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const sendChat = (e) => {
    e.preventDefault();
    localStorage.setItem("user", e.target[0].value);
    navigate("/chat");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <img
          src="https://plus.unsplash.com/premium_photo-1720032304972-1f1142e73253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="chat-image"
          className="h-auto max-h-[50vh] md:max-h-[66vh] w-auto shadow-custom-yellow"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <div className="w-full max-w-md p-4 flex flex-col shadow-custom-yellow gap-7">
          <h1 className="font-serif text-3xl md:text-5xl bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text text-center">
            WELCOME TO YOUR CHAT
          </h1>
          <p className="text-xl md:text-2xl text-center">
            Your platform to private your message
          </p>
          <div className="h-32 md:h-40 flex justify-center">
            <img
              src={Image}
              className="h-full w-auto"
              alt="Chat illustration"
            />
          </div>
          <form
            onSubmit={sendChat}
            className="flex flex-col md:flex-row gap-3 justify-center"
          >
            <input
              type="text"
              name="user"
              className="h-12 w-full md:w-2/3 p-3 font-sans text-lg border-3 rounded-md shadow-custom-yellow"
              placeholder="Type your Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button
              type="submit"
              className="h-12 w-full md:w-1/3 rounded-lg shadow-custom-yellow bg-blue-500 text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
