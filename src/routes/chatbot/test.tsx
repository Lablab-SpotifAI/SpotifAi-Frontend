/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { useNavigate } from "@builder.io/qwik-city";
import Chat from "./Chat";
import ChatInput from "./ChatInput";




export default component$(() => {
//   const nav = useNavigate();

  return (
    <>
      <div class="flex flex-col overflow-hidden h-screen">
        <Chat />
        <ChatInput />
        
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "LeanardoAi Chatbot",
  meta: [
    {
      name: "description",
      content: "This is the chatbot page",
    },
    {
      property: "og:title",
      content: "Chatbot page",
    },
    {
      property: "og:description",
      content: "This is the chatbot page",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://example.com/chatbot",
    },
  ],
};
