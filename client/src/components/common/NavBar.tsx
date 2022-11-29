import { eventData } from "../../utils/eventdata";

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

  return (
    <div className="flex border-b border-b-2 p-2 justify-between sticky top-0 z-50 bg-zinc-100">
      <h1 className="font-bold text-2xl">Houride</h1>
      <ul className="flex gap-5 items-center">
        <li>Explore</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default NavBar;
