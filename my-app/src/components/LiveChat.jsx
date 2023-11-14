import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateName, getRandomColor } from "../store/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    // api pooling
    console.log("api");
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          comment: getRandomColor(),
        })
      );
    }, 1500 );
    return () => clearInterval(timer);
  }, []);
  const chatMsg = useSelector((store) => store.chat.messages);
  return (
    <>
    <h1 className="font-bold mb-1">Live Message</h1>
      <div className="w-full border border-black bg-slate-100 h-[500px] overflow-y-scroll flex flex-col-reverse rounded-lg">
        
        <div className="">
          {chatMsg.map((c, i) => (
            <ChatMessage key={i} info={c}></ChatMessage>
          ))}
        </div>
      </div>
      <form
        className="flex w-full border mt-1 mb-1 border-black p-2 rounded-lg "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage(
            {
              name:"Aadish",
              comment:liveMessage
            }
          ))
          setLiveMessage("");
        }}
      >
        <input
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-[300px] "
          value={liveMessage}
          type="text"
        ></input>
        <button className="px-2  bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
