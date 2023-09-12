import logo from "/logo.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="navbar bg-info shadow-lg h-[4rem]">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-xl" onClick={() => nav("/")}>
            <img
              src={logo}
              alt="Logo"
              className="w-7 h-7"
            />
            SpotifAI
          </div>
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
            <div onClick={() => nav("/sign-in")}>
              <div className="btn btn-outline rounded-full capitalize font-neov w-28 ">
                Login
              </div>
            </div>
            <div onClick={() => nav("/sign-up")}>
              <div className="btn btn-primary rounded-full capitalize font-neov w-28">
                Register
              </div>
            </div>
          </>
          {/* )} */}
        </div>
      </div>
    </>
  );
};
