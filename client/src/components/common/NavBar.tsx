import { Link } from "react-router-dom";
import { useState } from "react";
import NavLinks from "./NavLinks";

// TODO import react router paths

//TODO when user logged in then get rid of login and signup and Hourde logo
//TODO when user logged in then have
//? Explore(to home page)
//? wishlist(save rides for later as favourites)
//? bookings (store for all your upcoming and past bookings)
//? inbox (take to the inbox page)
//? profile (take to the profileselect page)

const NavBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  //! Logo
  //! hamburger menu with the log in/signup
  //! profile photo

  //TODO need the Houride logo while logged in as its also home button, will be fine once hamburger in

  //? temporary boolean for is logged in, will change to state when user authentication
  let isLoggedIn = true;

  return (
    <div className="relative flex items-center border-b border-b-2 p-2 justify-between sticky top-0 z-50 bg-zinc-100">
      <Link to="/">
        <h1 className="font-bold text-2xl">Houride</h1>
      </Link>

      {isLoggedIn ? (
        <>
          <div
            onClick={(): void =>
              navOpen ? setNavOpen(false) : setNavOpen(true)
            }
            className="md:hidden mr-4 flex flex-col items-center gap-1 group hover:cursor-pointer "
          >
            <span
              className={`w-8 h-1 transition-all ${
                navOpen
                  ? "bg-indigo-300 group-hover:bg-zinc-400 origin-top-left rotate-45"
                  : "bg-zinc-400 group-hover:bg-indigo-300"
              }`}
            ></span>
            <span
              className={`w-6 h-1 transition-all ${
                navOpen ? "hidden" : "bg-zinc-400 group-hover:bg-indigo-300"
              }`}
            ></span>
            <span
              className={`w-8 h-1 transition-all ${
                navOpen
                  ? "bg-indigo-300 group-hover:bg-zinc-400 origin-bottom-right rotate-45"
                  : "bg-zinc-400 group-hover:bg-indigo-300"
              }`}
            ></span>
          </div>
          {navOpen && (
            <ul className="md:hidden absolute top-12 left-0 w-full h-[400px] bg-indigo-200 p-2 flex flex-col gap-8">
              <NavLinks setNavOpen={setNavOpen} />
            </ul>
          )}
          <ul className="md:flex hidden gap-5 items-center ">
            <NavLinks setNavOpen={setNavOpen} />
          </ul>
        </>
      ) : (
        <>
          <ul className="flex gap-5 items-center">
            <Link className="hover:text-zinc-400" to="/listings">
              Explore
            </Link>
            <Link className="hover:text-zinc-400" to="/login">
              Login
            </Link>
            <Link className="hover:text-zinc-400" to="/signup">
              Signup
            </Link>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavBar;
