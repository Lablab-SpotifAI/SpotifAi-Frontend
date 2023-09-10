/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgLogo from "~/assets/images/logo.svg";
import { useAuthSession, useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();
  return (
    <>
      <div class="navbar bg-info shadow-lg h-[4rem]">
        <div class="flex-1">
          <Link href="/" class="btn btn-ghost normal-case text-xl">
            <img
              src={ImgLogo}
              alt="Logo"
              height={50}
              width={50}
              class="w-7 h-7"
            />
            SpotifAI
          </Link>
        </div>
        <div class="flex-none gap-2">
          {session.value?.user ? (
            <div class="dropdown dropdown-end">
              <label tabIndex={0} class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img
                    src={session.value.user.image as string}
                    width="96"
                    height="96"
                    alt
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                class="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 border border-primary rounded-box w-52"
              >
                {/* <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li> */}
                <li>
                  <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/sign-in/">
                <button class="btn btn-outline rounded-full capitalize font-neov w-28 ">
                  Login
                </button>
              </Link>
              <Link href="/sign-up/">
                <button class="btn btn-primary rounded-full capitalize font-neov w-28 ">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
});
