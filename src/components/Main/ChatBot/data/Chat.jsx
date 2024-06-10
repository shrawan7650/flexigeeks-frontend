// import React from "react";
// import "./style.css";
// import "./script.js";

// function Chat() {
//   return (
//     <div>
//       <div class="botbody fixed mx-auto z-50 right-5 bottom-12">
//         <div class="botcontent bg-blue-500 flex justify-center items-center">
//           <div class="card h-auto max-w-sm">
//             <div id="botheader" className="flex justify-between items-center">
//               <h1>FlexiBot</h1>
//               <button class="send" onclick="reset()">
//                 <div class="circle refresh">
//                   <i
//                     class="zmdi zmdi-refresh-sync"
//                     // style="font-size: 1.5rem; margin-left: 0.2rem;"
//                   ></i>
//                 </div>
//               </button>
//             </div>
//             <hr />
//             <div
//               id="message-section"
//               className=" h-96 overflow-y-auto max-h-96"
//             >
//               {/* <!-- Chat messages will be displayed here --> */}
//               <div class="message" id="bot">
//                 <span id="bot-response">Hello.. I'm listening! Go on..</span>
//               </div>
//             </div>
//             <div class="quickbtns">
//               <button
//                 tabindex="2"
//                 class="quickmessage"
//                 data-message="Check USN 📝"
//                 onclick="send(this.getAttribute('data-message'))"
//               >
//                 Check USN 📝
//               </button>
//               <button
//                 tabindex="1"
//                 class="quickmessage"
//                 data-message="Report a Bug 🐞"
//                 onclick="send(this.getAttribute('data-message'))"
//               >
//                 Report a Bug 🐞
//               </button>
//             </div>
//             <div id="input-section">
//               <input
//                 id="user-input"
//                 type="text"
//                 placeholder="Type a message..."
//                 autocomplete="on"
//                 autofocus="autofocus"
//                 tabindex="3"
//               />
//               <button
//                 type="submit"
//                 class="send sendmessage"
//                 onclick="sendMessage()"
//                 tabindex="3"
//               >
//                 <div class="circle">
//                   <i
//                     class="zmdi zmdi-mail-send"
//                     // style="font-size: 1.5rem; margin-left: 0.2rem;"
//                   ></i>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   function reset() {
//     document.getElementById("message-section").innerHTML =
//       '<div class="message" id="bot"><span id="bot-response">Hello.. I\'m listening! Go on..</span></div>';
//   }

//   function send(message) {
//     var userInput = document.getElementById("user-input");
//     userInput.value = message;
//     var sendButton = document.querySelector('.send[type="submit"]');
//     sendButton.click();
//   }
// }

// export default Chat;

import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { findResponse } from "./botMessageHandle";
// import { readStudentDatafromxl } from "./data/botFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRefresh } from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: "bot", text: "Hello.. I'm listening! Go on.." },
    /*messages object has: id, text , typing, delay ,animate ,defaultClass*/
  ]);
  const inputRef = useRef(null);
  const messageContainerRef = useRef(null);
  const isAnyMessageAnimating = messages.some((message) => message.animate);
  const usnexp = /\b[0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}\b/i;

  function output(input) {
    userMessageSend({ text: input });
    const lowerInput = input.toLowerCase();
    const includesUsn = ["student", "rollno", "details", "usn"].some(
      (keyword) => lowerInput.includes(keyword)
    );
    const usn = usnexp.test(lowerInput) ? lowerInput.match(usnexp)[0] : null;

    if (includesUsn || usn) {
      if (usn) {
        readStudentDatafromxl(usn).then((message) => {
          botMessageSend(message);
        });
      } else {
        botMessageSend({ text: "Enter Student Rollno 📝" });
      }
    } else {
      botMessageSend({ text: findResponse(lowerInput) });
    }
  }

  function userMessageSend(...messages) {
    const updatedMessages = messages.map((message) => {
      const { text, defaultClass } = message;
      const newMessage = { id: "user", text, defaultClass };
      return newMessage;
    });
    setMessages((prevMessages) => [...prevMessages, ...updatedMessages]);
  }

  function botMessageSend(...messages) {
    const defaultTyping = "Typing...";
    const defaultDelay = 1000;
    const updatedMessages = messages.map((message) => {
      const { text, typing, delay, defaultClass } = message;
      const typingValue = typing !== undefined ? typing : defaultTyping;
      const delayValue = delay !== undefined ? delay : defaultDelay;
      const newMessage = {
        id: "bot",
        text,
        typing: typingValue,
        delay: delayValue,
        animate: true,
        defaultClass,
      };
      setTimeout(() => {
        newMessage.animate = false;
        setMessages((prevMessages) => [...prevMessages]);
      }, delayValue);
      return newMessage;
    });
    setMessages((prevMessages) => [...prevMessages, ...updatedMessages]);
  }

  function handleInputSend(btnMessage) {
    const messageToSend =
      typeof btnMessage === "string" ? btnMessage : inputRef.current.value;
    if (messageToSend) {
      output(messageToSend);
      inputRef.current.value = "";
    }
  }

  function reset() {
    setMessages([{ id: "bot", text: "Hello.. I'm listening! Go on.." }]);
  }

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot fixed bottom-5 right-12">
      <div id="botheader" className="flex justify-between border-b-2 border-b-black">
        <h1>WeXpert Chatter!</h1>
        <button className="send" onClick={reset}>
          <div className="circle refresh">
            <FontAwesomeIcon className="icon-block" icon={faRefresh} />
          </div>
        </button>
      </div>
      <hr />
      <div
        id="message-section"
        ref={messageContainerRef}
        className="message-container flex flex-col col-span-2 h-96"
      >
        {messages.map((message, index) => (
          <span
            className={`message ${
              message.id === "bot" && message.animate ? "typing-animation" : ""
            }'`}
            key={index}
            id={message.id}
            
          >
            {message.animate ? (
              <span>{message.typing}</span>
            ) : (
              <span
                className='{`${message.defaultClass && message.defaultClass}`} bg-slate-400'
              >
                <span dangerouslySetInnerHTML={{ __html: message.text }} />
              </span>
            )}
          </span>
        ))}
      </div>
      <div className="allquickbtn ml-5 mt-1">
        <button
          tabIndex="1"
          className="quickmessage"
          onClick={() => handleInputSend("Check Student 📝")}
          disabled={isAnyMessageAnimating}
        >
          Check Student 📝
        </button>
        <button
          tabIndex="2"
          className="quickmessage"
          onClick={() => handleInputSend("Next Class 🏫")}
          disabled={isAnyMessageAnimating}
        >
          Next Class 🏫
        </button>
        <button
          tabIndex="3"
          className="quickmessage col-span-2"
          onClick={() => handleInputSend("Time Table ⌛")}
          disabled={isAnyMessageAnimating}
        >
          Time Table ⌛
        </button>
        <button
          tabIndex="4"
          className="quickmessage col-span-2"
          onClick={() => handleInputSend("Holidays? 🎅")}
          disabled={isAnyMessageAnimating}
        >
          Holidays? 🎅
        </button>
      </div>
      <div id="input-section" className="flex justify-between">
        <div className="w-full flex">
          <input
            ref={inputRef}
            className="flex-1 bg-gray-700 rounded-[1rem] ml-[0.4rem] py-2 text-white"
            style={{ padding: "0.6rem", paddingLeft: "1rem" }}
            type="text"
            placeholder="Type a message..."
            autoFocus="autofocus"
            tabIndex="3"
            onKeyDown={(e) => e.key === "Enter" && handleInputSend()}
            disabled={isAnyMessageAnimating}
          />
        </div>
        <button
          type="submit"
          className="send"
          onClick={handleInputSend}
          tabIndex="3"
          disabled={isAnyMessageAnimating}
        >
          <div className="circle">
            <FontAwesomeIcon className="icon-block" icon={faPaperPlane} />
          </div>
        </button>
      </div>
    </div>
  );
}
