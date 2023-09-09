import { component$ } from "@builder.io/qwik";
// import ImgBottomEffect from "~/assets/images/bottom-effect.svg";
export default component$(() => {
  return (
    <>
      <div class="w-full flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center w-[75%] p-5 h-24 items-center rounded-full border border-stone-300 backdrop-blur-lg bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          <div class="text-center text-md lg:text-[1.375rem] font-bold">
            Make the journey begin. Let your ideas shine and make your first
            podcast.{" "}
          </div>
        </div>
        {/* <div>
          <img
            src={ImgBottomEffect}
            alt="bottom effect image"
            class="w-full absolute"
            height={800}
            width={800}
          />
        </div> */}
      </div>
    </>
  );
});
