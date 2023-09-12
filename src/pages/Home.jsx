/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Home/Header";

export const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Header />
      <div className="hero items-start bg-base-100 flex-box flex-col pt-4 w-full h-[calc(100dvh - 4rem)]">
        <div className="flex flex-col justify-center lg:flex-row-reverse items-center lg:justify-between px-6 lg:px-16 z-[1]">
          <img
            src="header.svg"
            className=" lg:max-w-xl mr-8 lg:mr-0 select-none max-w-xs"
            alt="header-bg"
            height={600}
            width={600}
            draggable={false}
          />
          <div>
            <div className="md:w-20 h-[33px] px-5 py-1 bg-pink-950 rounded-full justify-center items-center gap-0.5 inline-flex">
              <div className="w-5 h-5 relative">
                <img width={100} height={100} src="stars.png" alt="stars" />
              </div>
              <div className="text-white text-base font-normal">Ai</div>
            </div>
            <h1 className="flex flex-col">
              <span className="text-white text-3xl lg:text-6xl font-bold lg:leading-snug leading-tight">
                Generate any{" "}
                <span className="text-purple-950 text-3xl lg:text-6xl font-bold lg:leading-snug leading-tight">
                  podcast
                </span>
              </span>
              <span className="text-white text-3xl lg:text-6xl font-bold lg:leading-snug leading-tight">
                idea in your mind in one click
              </span>
            </h1>

            <p className="py-6 font-neov">
              Make your podcast passion come to reality just type your idea in
              prompt and our website made the magic by generate a podcast
              suitable to your idea with text and sound format. Don't wait try
              it Now.
            </p>
            {/* {session.value?.user ? ( */}

            <button
              className="btn btn-primary rounded-full capitalize btn-block lg:btn-wide font-neov "
              onClick={() => nav("/chat")}
            >
              Generate Now
            </button>

            {/* ) : ( */}
            {/* <Link href="/sign-in/">
                <button className="btn btn-primary rounded-full capitalize btn-block lg:btn-wide font-neov ">
                  Generate Now
                </button>
              </Link> */}
            {/* )} */}
          </div>
        </div>
        <div className="w-full">
          <img
            src="effect.svg"
            className="w-full absolute -bottom-44 -z-0 select-none hidden lg:block"
            alt="effect"
            height={100}
            width={800}
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};
