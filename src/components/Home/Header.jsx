import { Link } from "react-router-dom";
import logo from "/logo.svg";

export const Header = () => {
  return (
    <>
      <div className="navbar bg-info shadow-lg h-[4rem]">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <img
            //   src="logo.svg"
              src={logo}
              alt="Logo"
              
              className="w-7 h-7"
            />
            SpotifAI
          </Link>
        </div>
        <div className="flex-none gap-2">
          {/* {session.value?.user ? ( */}
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  // src={session.value.user.image as string}
                  width="96"
                  height="96"
                  alt="profil"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 border border-primary rounded-box w-52"
            >
              <li>
                <button onClick$={() => signOut.submit({ callbackUrl: "/" })}>
                  Logout
                </button>
              </li>
            </ul>
          </div> */}
          {/* ) : ( */}
          <>
            <Link href="/sign-in">
              <button className="btn btn-outline rounded-full capitalize font-neov w-28 ">
                Login
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn btn-primary rounded-full capitalize font-neov w-28 ">
                Register
              </button>
            </Link>
          </>
          {/* )} */}
        </div>
      </div>
    </>
  );
};
