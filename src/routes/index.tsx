/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import heartFace from "~/assets/images/heart-face.svg";
import bang from "~/assets/images/bang.svg";
import ImgstarGreen from "~/assets/images/green-star.png?jsx";
import ImgstarYellow from "~/assets/images/yellow-star.png?jsx";
import ImgstarPink from "~/assets/images/pink-star.png?jsx";
// import Slogan from "~/components/slogan/slogan";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="flex flex-col w-full justify-center items-center lg:px-24 lg:pb-20 px-6 pb-6">
        <div class="flex-box flex-col md:flex-row lg:pb-32 lg:pt-72 pb-16 pt-16">
          <div>
            <img
              src={heartFace}
              class="max-w-lg lg:max-w-lg"
              alt="heart face"
              width="305"
              height="293"
            />
          </div>
          <div class=" lg:w-[70%]">
            <h3 class="text-3xl font-medium lg:text-5xl my-5">
              What is <span>SpotifAI?</span>
            </h3>
            <p class="">
              SpotifAI is an AI platform that helps you create podcasts. Just
              give it an idea, and it will generate a podcast script for you in
              text format You can then use the script to create an audio
              podcast.Leonardo is free to use for basic features, and there are
              paid plans available for businesses and teams. Here are some of
              the benefits of using SpotifAI to create podcasts: Save
              time,Improve quality,Get feedback and Collaborate with others
            </p>
          </div>
        </div>
        {/* second */}
        <div class="flex-box flex-col-reverse lg:flex-row w-full mb-16">
          <div class="lg:w-[70%]">
            <h3 class="text-3xl font-medium lg:text-5xl my-5">
              Can experts use SpotifAI?
            </h3>
            <p class="mb-6 text-lg">
              SpotifAI has the potential to revolutionize the podcast field. By
              making it easier and faster to create high-quality podcasts,
              Leonardo can help more people start and grow their podcast
              businesses.Experts in the podcast field can use Leonardo to reach
              another level by:
            </p>
            <ul class="list-inside flex-col">
              <li class="flex items-start gap-2 mb-3">
                <ImgstarGreen />
                Creating more content: Leonardo can help experts create more
                content by automating the scriptwriting process. This frees up
                experts' time so they can focus on other aspects of their
                podcast business, such as promoting and distributing their
                content.
              </li>
              <li class="flex items-start gap-2 mb-3">
                <ImgstarYellow />
                Improving the quality of their content: Leonardo can help
                experts improve the quality of their content by generating
                scripts that are both creative and engaging. This can help
                experts attract more listeners and build a loyal audience.
              </li>
              <li class="flex items-start gap-2">
                <ImgstarPink />
                Experimenting with new formats: Leonardo can help experts
                experiment with new podcast formats, such as interview shows,
                narrative podcasts, and comedy podcasts. This can help experts
                find new ways to connect with their audience and stay ahead of
                the competition.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={bang}
              class="max-w-lg lg:max-w-lg"
              alt="heart face"
              height={293}
              width={305}
            />
          </div>
        </div>
        <div class="w-full h-full lg:px-10 lg:py-10 p-4 md:w-[984px] md:h-[120px]  rounded-[100px] border border-stone-300 backdrop-blur-[45px] flex-box flex-col bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text  text-transparent">
          <div class="text-center text-md lg:text-[1.30rem] font-bold">
            Make the journey begin. Let your ideas shine and make your first
            podcast.{" "}
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "SpotifAI",
  meta: [
    {
      name: "description",
      content: "This is the home page",
    },
    // Open graph
    {
      property: "og:title",
      content: "Home page",
    },
    {
      property: "og:description",
      content: "This is the home page",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://example.com/",
    },
  ],
};
