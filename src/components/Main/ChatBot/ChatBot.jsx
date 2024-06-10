import React from "react";
import config from "./components/config.js";
import MessageParser from "./components/MessageParser.jsx";
import ActionProvider from "./components/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

export default function ChatBot() {
  return (
    <div className="z-10 fixed bottom-24 bg-red-400 right-24">
      <Chatbot
        config={config}
        headerText='FlexiBot'
        placeholderText='Text...'
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        // messageHistory={loadMessages()}
        // saveMessages={saveMessages}
        // validator={validateInput}
        // runInitialMessagesWithHistory
        disableScrollToBottom
      />
    </div>
  );
}
