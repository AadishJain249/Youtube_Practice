import React from 'react'

const ChatMessage = ({info}) => {
    const {name,comment}=info
    console.log("chat meddaaddfssd");
    console.log(info);
  return (
    <div className="flex items-center shadow-lg mt-2 ml-2 mr-2">
        <img
        className="h-8"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt=""
      ></img>
        <p className='font-bold px-2'>{name}</p>
        <p>{comment}</p>
    </div>
  )
}

export default ChatMessage