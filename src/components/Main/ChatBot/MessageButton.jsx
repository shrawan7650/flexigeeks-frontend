// function MessageButton() {
//   const [show, setShow] = useState(false);
//   function hide() {
//     setShow(!show);
//   }
//   return (
//     <div>
//       <button
//         className="button bg-blue-100 fixed bottom-10 right-9 z-50 rounded-3xl p-2 shadow-lg "
//         onClick={hide}
//       >
//         <TbMessage2Code size={45} className=" text-[#5AB2FF]"/>
//         {show ? <ChatBot  onClick={hide}/> : null}
//       </button>
//     </div>
//   );
// }

// export default MessageButton;

import React from "react";
import ChatBot from "./ChatBot.jsx";
import { TbMessage2Code } from "react-icons/tb";

function MessageButton() {
  return (
    <div>
      <ul class="flex flex-col fixed bottom-16 right-12">
        <li>
          <details class="group">
            <summary class="flex items-center gap-2 p-2 font-medium t-none hover:cursor-pointer">
              <TbMessage2Code size={35} className="text-blue-400 shadow-2xl" />
            </summary>

            <article class="">
              <ul class="flex">
                <ChatBot />
              </ul>
            </article>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default MessageButton;
