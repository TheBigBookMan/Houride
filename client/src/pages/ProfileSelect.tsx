import car from "../styles/car.jpg";
import ProfileInfo from "../components/features/profile/ProfileInfo";

// TODO this is the main profile page to then select what you want to do with profile--- like airbnb

//? this will be a page of its own but add a link to it
//! car rental - page to set up hiring out your car (car info, car images, specific events, reviews, rating, dates free, email user, message user on app, price, any comments, potential map of radius user willing to do)

//! Change language/change currency

//! logout button

//TODO import react router for path links to the components

//TODO make each list item group hover and group active click to the link

const ProfileSelect = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-center mt-2">Profile</h1>
      <ProfileInfo />
      {/* <ul className="flex flex-col gap-2 p-2 w-full">
        <li className="h-[80px] p-2 flex items-center gap-3 group hover:bg-zinc-200 hover:cursor-pointer border-b-2">
          <ProfileInfo />

          <img src={car} className="w-16 h-16 rounded-2xl" />
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <h1>Ben</h1>
              <p className="text-xs text-zinc-400">Show profile</p>
            </div>
            <p className="text-2xl">{">"}</p>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default ProfileSelect;
