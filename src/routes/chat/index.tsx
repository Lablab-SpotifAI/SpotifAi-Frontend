/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";

import micro from "~/assets/micro.svg";
export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <div class="flex-box flex-col h-screen">
        <div class="flex-box flex-col ">
          <div class="flex-box">
            <div class="flex-box">
              <img
                // eslint-disable-next-line qwik/jsx-img
                src={micro}
                alt="micro"
                class="w-1/3 h-1/3"
                width="500"
                height="100"
              />
            </div>
          </div>
          <div class="">
            <span class="text-neutral-50 text-[22px] font-bold">Let’s </span>
            <span class="text-purple-950 text-[22px] font-bold">generate</span>
            <span class="text-neutral-50 text-[22px] font-bold">
              {" "}
              some magic start now.
            </span>
          </div>
        </div>
        <div class="md:h-[85px] absolute bottom-0 flex-box flex-end w-full px-3">
          <div
            class="md:w-[752px] md:h-[85px] pl-6 lg:pr-[350px] w-full py-5 bg-neutral-700 bg-opacity-20 rounded-[50px] border border-zinc-400 border-opacity-60 backdrop-blur-[60px] justify-start items-center gap-2 inline-flex mr-2"
            onClick$={async () => {
              await nav("/chatbot");
            }}
          >
            <div class="md:h-[23px] flex-box gap-[327px] flex">
              <div class="text-white text-base font-normal">Type your idea</div>
            </div>
          </div>
          <div class="md:w-[136px] p-2 h-full md:h-20 md:py-[11px] bg-gradient-to-br from-blue-700 to-purple-950 rounded-[32px] flex-box flex-col md:flex-row items-center gap-2.5 inline-flex">
            <img
              width={100}
              height={100}
              class="h-5 w-5"
              src="/stars.png"
              alt="stars"
            />
            <div class="text-neutral-50 text-base font-normal px-2">
              Generate
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "LeanardoAi Chat",
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
      href: "https://example.com/chat",
    },
  ],
};
