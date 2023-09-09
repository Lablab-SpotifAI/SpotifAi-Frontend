import { component$, useSignal, $ } from "@builder.io/qwik";
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import { LuMessageSquare, LuX } from "@qwikest/icons/lucide";

// import { Chat } from "~/integrations/react/chat";
// import { Chatbot } from "~/integrations/react/chatscope";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { User } from "@chatscope/use-chat";

// import React, { useState } from "react";
// import { Bot } from "lucide-react";

export default component$(() => {
  return (
    <>
      {/* <Chat user={new User({ id: (1).toString(), username: "John" })} /> */}
      {/* <Chatbot /> */}
      {/* <NavigateToChatbotButton /> */}
    </>
  );
});

// function NavigateToChatbotButton() {
const NavigateToChatbotButton = component$(() => {
  // eslint-disable-next-line qwik/use-method-usage
  // const [isChatOpen, setIsChatOpen] = useState(false);

  const isChatOpen = useSignal(false);

  const handleChatIconClick = $(() => {
    // setIsChatOpen(!isChatOpen);
    isChatOpen.value = !isChatOpen.value;
  });

  return (
    <div
     
      class="fixed bottom-0 right-0 p-10 z-100"
    >
      <div class="flex justify-end fixed bottom-4 right-4">
        <div onClick$={handleChatIconClick} class="cursor-pointer">
          {!isChatOpen.value ? (
            <LuMessageSquare class="bg-blue-500 hover:bg-blue-600 rounded-full w-[60px] h-[60px] p-3 text-white border-2 border-white fill-white" />
          ) : (
            <LuX class="bg-blue-500 hover:bg-blue-600 rounded-full w-[60px] h-[60px] p-3 text-white border-2 border-white fill-white" />
          )}
        </div>
        {/* {isChatOpen.value && <Chatbot />} */}
        {/* {isChatOpen.value && <Chat user={new User({ id: (1).toString(), username: "John" })} /> } */}
        {/* <Chat user={new User({ id: (1).toString(), username: "John" })} />  */}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "SpotifAI Chatbot",
  meta: [
    {
      name: "description",
      content: "This is the chat page",
    },
    {
      property: "og:title",
      content: "Chat page",
    },
    {
      property: "og:description",
      content: "This is the chat page",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://example.com/chatbot",
    },
  ],
};
