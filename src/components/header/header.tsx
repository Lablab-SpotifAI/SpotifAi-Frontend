import { component$ } from "@builder.io/qwik";
import bg from "~/assets/images/header-bg.svg";
import effect from "~/assets/images/effect.svg";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="hero items-start bg-base-100 flex-box flex-col pt-4 ">
        <div class="flex flex-col justify-center lg:flex-row-reverse items-center lg:justify-between px-16 z-[1]">
          <img
            src={bg}
            class="max-w-md lg:max-w-xl mr-8 lg:mr-0 select-none"
            alt="header-bg"
            height={800}
            width={800}
            draggable={false}
          />
          <div>
            <div class="md:w-20 h-[33px] px-[21px] py-[5px] bg-pink-950 rounded-[50px] justify-center items-center gap-0.5 inline-flex">
              <div class="w-5 h-5 relative">
                <img width={100} height={100} src="stars.png" alt="stars" />
              </div>
              <div class="text-white text-base font-normal">Ai</div>
            </div>
            <h1 class="flex flex-col">
              <span class="text-white text-6xl font-bold lg:leading-snug leading-tight">
                Generate any{" "}
                <span class="text-purple-950 text-6xl font-bold lg:leading-snug leading-tight">
                  podcast
                </span>
              </span>
              <span class="text-white text-6xl font-bold lg:leading-snug leading-tight">
                idea in your mind in one click
              </span>
            </h1>

            <p class="py-6 font-neov">
              Make your podcast passion come to reality just type your idea in
              prompt and our website made the magic by generate a podcast
              suitable to your idea with text and sound format. Don't wait try
              it Now.
            </p>
            <button class="btn btn-primary rounded-full capitalize px-20  font-neov ">
              <Link href="/chat/">Generate Now</Link>
            </button>
          </div>
        </div>
        <div class="w-full">
          <img
            src={effect}
            class="w-full absolute -bottom-44 -z-0 select-none"
            alt="effect"
            height={100}
            width={800}
            draggable={false}
          />
        </div>
      </div>
    </>
  );
});
