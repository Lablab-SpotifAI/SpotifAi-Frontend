import { component$ } from "@builder.io/qwik";
import ImgLogo from "~/assets/images/logo.svg";
import { useNavigate } from "@builder.io/qwik-city";


export default component$(() => {
  const nav = useNavigate();

  return (
    <>
      <div class="navbar bg-info shadow-lg">
        <div class="flex-1" onClick$={async () => {
                await nav("/");
              }}>
          <a class="btn btn-ghost normal-case text-xl">
            <img
              src={ImgLogo}
              alt="Logo"
              height={50}
              width={50}
              class="w-7 h-7"
            />
            SpotifAI
          </a>
        </div>
        <div class="flex-none">
          <button class="btn btn-primary rounded-full capitalize font-neov w-32 ">
            Register
          </button>
        </div>
      </div>
    </>
  );
});
