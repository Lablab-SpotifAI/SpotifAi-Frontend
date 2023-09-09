/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "../plugin@auth";
// import { useLocation } from "@builder.io/qwik-city";
import { SiGoogle } from "@qwikest/icons/simpleicons";
// import { GoMarkGithub16 } from "@qwikest/icons/octicons";
import SignInImg from "~/assets/images/sign-in.svg";

export default component$(() => {
  const signIn = useAuthSignin();
  // const loc = useLocation();
  return (
    <>
      <section class="h-screen w-full flex justify-center items-center px-6 lg:px-0 ">
        <div class="lg:h-[60%] lg:w-[45%] w-full h-[40%] overflow-hidden flex justify-center items-center border rounded-[3rem] bg-[#13011F]  relative shadow-lg border-stone-300">
          <div class="flex flex-col justify-center lg:w-[60%] w-full px-6 gap-5">
            <h3 class="font-bold text-xl lg:text-5xl text-left">Login</h3>
            <p class="font-normal text-base text-left">
              Ooops!..Guess who's back again.
            </p>
            {/* <button
              class="btn btn-outline hover:btn-primary rounded-full capitalize font-neov btn-block justify-start"
              onClick$={async () =>
                await signIn.submit({
                  providerId: "github",
                  // options: { callbackUrl: `${loc.url}` },
                })
              }
            >
              <GoMarkGithub16 class="h-5 w-5" />
              Login using github
            </button> */}
            <button
              class="btn btn-outline lg:hover:btn-primary rounded-full capitalize font-neov btn-block justify-start"
              onClick$={async () =>
                await signIn.submit({
                  providerId: "google",
                  // options: { callbackUrl: `${loc.url}` },
                })
              }
            >
              <SiGoogle class="h-5 w-5" />
              Login using Google
            </button>
            <img
              src={SignInImg}
              alt="smilie face"
              class="absolute top-0 left-0 lg:h-40 h-16"
            />
          </div>
        </div>
      </section>
    </>
  );
});
