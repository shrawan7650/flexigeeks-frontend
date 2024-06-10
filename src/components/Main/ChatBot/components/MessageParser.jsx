// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
    if (message.includes("helo")) {
      actions.handleHello();
    }
    if (message.includes("hii")) {
      actions.handleHello();
    }
    if (message.includes("hi")) {
      actions.handleHello();
    }
    if (message.includes("Whats your name")) {
      actions.handleName();
    }
    if (message.includes("what is your name")) {
      actions.handleName();
    }
    if (message.includes("who build you")) {
      actions.handleBuild();
    }
    if (message.includes("Who buulds you?")) {
      actions.handleBuild();
    }
    if (message.includes("Who made you")) {
      actions.handleBuild();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
