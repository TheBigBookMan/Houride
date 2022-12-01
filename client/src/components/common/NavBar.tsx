import { Link } from "react-router-dom";

// TODO import react router paths

//TODO when user logged in then get rid of login and signup and Hourde logo
//TODO when user logged in then have
//? Explore(to home page)
//? wishlist(save rides for later as favourites)
//? bookings (store for all your upcoming and past bookings)
//? inbox (take to the inbox page)
//? profile (take to the profileselect page)

const NavBar = () => {
  //! Logo
  //! hamburger menu with the log in/signup
  //! profile photo

  //TODO need the Houride logo while logged in as its also home button, will be fine once hamburger in

  //? temporary boolean for is logged in, will change to state when user authentication
  let isLoggedIn = true;

  return (
    <div className="flex border-b border-b-2 p-2 justify-between sticky top-0 z-50 bg-zinc-100">
      {isLoggedIn ? (
        <ul className="flex gap-5 items-center ">
          <Link className="hover:text-zinc-400" to="/listings">
            Explore
          </Link>
          <Link className="hover:text-zinc-400" to="/inbox">
            Inbox
          </Link>
          <Link className="hover:text-zinc-400" to="/wishlist">
            Wishlist
          </Link>
          <Link className="hover:text-zinc-400" to="/bookings">
            Bookings
          </Link>
          <Link className="hover:text-zinc-400" to="/profile">
            Profile
          </Link>
          <Link className="hover:text-zinc-400" to="/">
            Logout
          </Link>
        </ul>
      ) : (
        <>
          <Link to="/">
            <h1 className="font-bold text-2xl">Houride</h1>
          </Link>

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
