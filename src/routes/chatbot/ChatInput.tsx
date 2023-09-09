/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from "@builder.io/qwik";
// import { useState } from "react";
// import { useNavigate } from "@builder.io/qwik-city";
// import { type PaperAirplaneIcon } from "@heroicons/react/24/solid";
// import { PaperAirplaneIcon } from "@qwikest/icons/heroicons";
import { HiPaperAirplaneMini } from "@qwikest/icons/heroicons";
import React from "react";

export default component$(() => {
  //   const nav = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [prompt, setPrompt] = useState("");
  const prompt = useSignal("");
  // const {data:session}=useSession()
  const session = true;

  //   const a = (
  //     <>
  //       <PaperAirplaneIcon class="h-4 w-4 -rotate-45" />
  //     </>
  //   );
  //   type DatetimeCell = ComponentType<{ value: string }>;

  //   function getDateTimeCell(): DatetimeCell {
  //     return () => <>{}</>;
  //   }

  //   const b = () => {
  //     return (
  //       <>
  //         <PaperAirplaneIcon class="h-4 w-4 -rotate-45" />
  //       </>
  //     );
  //   };

  return (
    <>
      <div class="bg-gray-700/50 text-gray-400 rounded-lg text-sm mx-48 my-10">
        <form action="p-5 space-x-5 flex">
          <input
            type="text"
            placeholder="Type your message here..."
            class="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
            value={prompt.value}
            disabled={!session}
            onChange$={(e)=>prompt.value=e.target.value}
          />
          <button
            disabled={!prompt.value || !session}
            type="submit"
            class="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <HiPaperAirplaneMini class="h-4 w-4 -rotate-45" />
            {/* Submit */}
          </button>
        </form>
      </div>
    </>
  );
});
