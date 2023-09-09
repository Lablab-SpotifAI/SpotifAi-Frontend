/** @jsxImportSource react */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Avatar,
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { qwikify$ } from "@builder.io/qwik-react";

// import { getAuth } from "firebase/auth";
import { LuBot } from "@qwikest/icons/lucide";

const ChatBot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "👋🏻 Hi, I am SpotifAI! How can I help you?",
      sentTime: "just now",
      sender: "ChatGPT",
      role: "system",
    },
  ]);

  const apiKey = import.meta.env.VITE_OPENAI_KEY;
  const orgKey = import.meta.env.VITE_ORGANIZATION_KEY;

  const generateChat = async (message) => {
    const newMessage = {
      message: message,
      sender: "UserGPT",
      direction: "outgoing",
    };
    // post all the old Messages & new Message
    const newMessages = [...messages, newMessage];

    // update our messages state
    setMessages(newMessages);

    // set a typing indicator for chatgpt is typing
    setTyping(true);

    // process message to chatgpt: send it over and see the response
    await sendMessage(newMessages);
  };

  async function sendMessage(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        // response from chatGPT
        role = "assistant";
      } else {
        // request from user
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "You are an AI Assistant chatbot of SpotifAI a website that helps users to generate audio files powered by Audiocraft GenAI created by meta. Audiocraft is a library for audio processing and generation with deep learning. It features the state-of-the-art EnCodec audio compressor / tokenizer, along with MusicGen, a simple and controllable music generation LM with textual and melodic conditioning. Answer as short and concise as possible",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "OpenAI-Organization": orgKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        const response = data.choices[0].message.content;
        setMessages([
          ...chatMessages,
          {
            message: response,
            sender: "ChatGPT",
            role: "system",
          },
        ]);
        setTyping(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

//   const auth = getAuth();
//   const user = auth.currentUser;
//   const photoURL = user.photoURL;
  // const photoURL = '';

  return (
    <div className="bg-white text-black w-full h-full border-4 border-white rounded-lg shadow-lg">
      <div className="py-5 text-center text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg ">
        <div className="flex-box">
          <LuBot className="text-white" size={28} />
          <h2 className="text-white px-2 font-bold text-xl">
            SpotifAI<span className="font-normal">Bot</span>
          </h2>
        </div>
        <div>
          <p className="text-blue-100 pt-2">Do you have any questions?</p>
        </div>
      </div>
      <div className="h-96 overflow-y-auto mb-4 mt-2">
        <MainContainer className="md:h-full border-0">
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? (
                  <TypingIndicator content="SpotifAIBot is typing" />
                ) : null
              }
              className="text-white"
            >
              {messages.map((message, i) => {
                if (message.role === "system") {
                  return (
                    <>
                      <Message
                        key={i}
                        model={message}
                        className="pt-2"
                        avatarPosition="tl"
                      >
                        <Avatar
                          src="https://cdn-icons-png.flaticon.com/512/4712/4712009.png"
                          className="p-1 w-[64px] h-[64px]"
                          size="md"
                          status="available"
                        />
                      </Message>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Message key={i} model={message} className="pt-2 rounded">
                        {/* {photoURL ? (
                          <Avatar src={photoURL} size="md" status="available" />
                        ) : ( */}
                          <Avatar src='https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' size="md" status="available" />
                        {/* )} */}
                      </Message>
                    </>
                  );
                }
              })}
            </MessageList>
            <MessageInput
              className="bg-slate-600 text-black"
              placeholder="Your message here..."
              onSend={generateChat}
              attachButton={false}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

// export default ChatBot;
export const Chatbot = qwikify$(ChatBot);
