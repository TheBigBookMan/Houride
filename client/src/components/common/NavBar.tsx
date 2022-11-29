import { eventData } from "../../utils/eventdata";

// TODO import react router paths

const NavBar = () => {
  //! Logo
  //! hamburger menu with the log in/signup
  //! profile photo

  return (
    <div className="flex border-b border-b-2 p-2 justify-between sticky top-0 z-50 bg-zinc-100">
      <h1 className="font-bold text-2xl">Houride</h1>
      <ul className="flex gap-5 items-center">
        <li>Login</li>
        <li>Signup</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default NavBar;
