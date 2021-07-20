import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import StartChat from "./StartChat";

type IChatProps = {
  className?: string;
  classes?:string
  handleClose?:() => void
};
enum options {
  startchat = "startchat",
  chatbox = "chatbox",

}
const ChatBox = (props: IChatProps): ReactElement => {
  const { className, classes, handleClose } = props;
    const [tabStates, setTabStates] = useState<string>("startchat");
    const [messages, setMessages] = useState([" Please be patient while you are being conneted with an operator ..."])
    const [message, setMessage] = useState('')
    const [person, setPerson] = useState("Noah");

  const handleChangeMessage =(e:any) => {
setMessage(e.target.value)
  }
  const handeKeypress = (e:any) => {
      if (e.which === 13) {
        console.log("entered");
        setMessages([...messages, message])
        setMessage('')
      }
  }
  return (
    <>
      {options.chatbox === tabStates ? (
        <div className={`${className} ${classes}`}>
          <div className="content-box">
            <strong className="heading-box heading-box__user-status">
              <span className="img-holder">
                {/* eslint-disable */}
                <img
                  src="https://via.placeholder.com/350x150"
                  alt="profile image"
                />
              </span>
              <span className="title">Conversation</span>
              <span className="status active">{person}</span>
              <span className="close" onClick={handleClose}></span>
            </strong>
            <div className="scrolled-area">
              <div className="d-flex align-items-end flex-direction-column h-100">
                <div className="content-area">
                  <div className="chat-text">
                    <p>Hello, {person}</p>
                  </div>
                  {messages.map((message) => {
                    return (
                      <div className="chat-text">
                        <p key={message}>{message}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="message-box">
              <span className="more-options"></span>
              <input
                type="text"
                value={message}
                placeholder="Your message"
                onChange={handleChangeMessage}
                onKeyPress={handeKeypress}
              />
            </div>
          </div>
        </div>
      ) : (
        <StartChat
          onSubmit={(person: string) => {
            setPerson(person);
            setTabStates("chatbox");
          }}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default styled(ChatBox)`
  
`;
