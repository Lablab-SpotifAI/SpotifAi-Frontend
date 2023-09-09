/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "../plugin@auth";
// import { useLocation } from "@builder.io/qwik-city";
// import { GoMarkGithub16 } from "@qwikest/icons/octicons";
import { SiGoogle } from "@qwikest/icons/simpleicons";
import RegisterImg from "~/assets/images/register-img.svg";

export default component$(() => {
  const signUp = useAuthSignin();
  // const loc = useLocation();
  return (
    <>
      <section class="h-screen w-full flex justify-center items-center px-6 lg:px-0">
        <div class="lg:h-[60%] lg:w-[45%] w-full h-[40%] flex justify-center items-center border rounded-[3rem] bg-[#13011F]  relative shadow-lg border-stone-300">
          <div class="flex flex-col justify-center lg:w-[50%] w-full px-6 gap-5">
            <h3 class="font-bold text-xl lg:text-5xl text-left">Register</h3>
            <p class="font-normal text-base text-left">
              Welcome on a new adventure.try our magic now..!
            </p>
            {/* <button
              class="btn btn-outline hover:btn-primary rounded-full capitalize font-neov btn-block justify-start"
              onClick$={async () =>
                await signUp.submit({
                  providerId: "github",
                  // options: { callbackUrl: `localhost:5173/callback/` },
                })
              }
            >
              <GoMarkGithub16 class="h-5 w-5" />
              Register using github
            </button> */}
            <button
              class="btn btn-outline lg:hover:btn-primary rounded-full capitalize font-neov btn-block justify-start"
              onClick$={async () =>
                await signUp.submit({
                  providerId: "google",
                  // options: { callbackUrl: `localhost:5173/callback/` },
                })
              }
            >
              <SiGoogle class="h-5 w-5" />
              Register using Google
            </button>
            <img
              src={RegisterImg}
              alt="smilie face"
              class="absolute lg:top-6 lg:right-6 -top-6 -right-8 scale-50 lg:scale-100"
            />
          </div>
        </div>
      </section>
    </>
  );
});
