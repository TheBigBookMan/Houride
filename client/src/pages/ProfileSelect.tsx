import car from "../styles/car.jpg";
import ProfileInfo from "../components/features/profile/ProfileInfo";
import PersonalInfo from "../components/features/profile/PersonalInfo";
import Settings from "../components/features/profile/Settings";
import { listItems } from "../components/features/profile/listitems";

//? this will be a page of its own but add a link to it
//! car rental - page to set up hiring out your car (car info, car images, specific events, reviews, rating, dates free, email user, message user on app, price, any comments, potential map of radius user willing to do)

//! Change language/change currency

//! logout button

//TODO import react router for path links to the components

//TODO make each list item group hover and group active click to the link
//TODO might need to add into the hardcode array listitems the path component, cant remember if thats here or other spot

//TODO import icons for each section

const ProfileSelect = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-center mt-2">Profile</h1>
      <ul className="flex flex-col gap-5 p-2 w-full">
        <li className="h-[80px] p-2 flex items-center gap-3 group hover:bg-zinc-200 hover:cursor-pointer rounded-2xl transition-all border-b-2">
          <img src={car} className="w-16 h-16 rounded-2xl" />
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <h1>Ben</h1>
              <p className="text-xs text-zinc-400">Show profile</p>
            </div>
            <p className="text-2xl">{">"}</p>
          </div>
        </li>
        {listItems.map((item) => (
          <li
            className="h-[50px] flex justify-between items-center group hover:bg-zinc-200 hover:cursor-pointer rounded-2xl transition-all p-2"
            key={item.title}
          >
            <div className="flex gap-2 items-center">
              <p>{item.icon}</p>
              <div className="flex flex-col">
                <p>{item.title}</p>
                <p className="text-sm text-zinc-400">{item.bio}</p>
              </div>
            </div>
            <p className="text-2xl">{">"}</p>
          </li>
        ))}
      </ul>
      <button
        type="submit"
        className="ml-2 border-2 rounded-xl w-[150px] mt-1 p-1 bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 transition-all"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileSelect;
