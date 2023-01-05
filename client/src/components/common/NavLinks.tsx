import { Link } from "react-router-dom";
import UseUserContext from "../../contexts/UserContext";

//! GET RID OF ANY

const NavLinks = ({ setNavOpen }: any) => {
  const { logoutUser } = UseUserContext();

  return (
    <>
      <Link
        onClick={() => setNavOpen(false)}
        className="hover:text-zinc-400"
        to="/listings"
      >
        Explore
      </Link>
      <Link
        onClick={() => setNavOpen(false)}
        className="hover:text-zinc-400"
        to="/inbox"
      >
        Inbox
      </Link>
      <Link
        onClick={() => setNavOpen(false)}
        className="hover:text-zinc-400"
        to="/wishlist"
      >
        Wishlist
      </Link>
      <Link
        onClick={() => setNavOpen(false)}
        className="hover:text-zinc-400"
        to="/bookings"
      >
        Bookings
      </Link>
      <Link
        onClick={() => setNavOpen(false)}
        className="hover:text-zinc-400"
        to="/profile"
      >
        Profile
      </Link>
      <Link
        onClick={() => setNavOpen(false)}
        className="hover:text-zinc-400"
        to="/rental"
      >
        Car Renting
      </Link>
      <Link
        onClick={() => {
          setNavOpen(false);
          logoutUser();
        }}
        className="hover:text-zinc-400"
        to="/"
      >
        Logout
      </Link>
    </>
  );
};

export default NavLinks;
