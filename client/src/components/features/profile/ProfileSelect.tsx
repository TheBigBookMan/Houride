import car from "../../../styles/car.jpg";
import { listItems } from "./listitems";
import { Link } from "react-router-dom";

//! fix the listItem map any types, doesnt work for the 'to' prop in link

const ProfileSelect = () => {
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-5 p-2 w-full">
        <Link
          to="/profile/profile-info"
          key="showProfile"
          className="h-[80px] p-2 flex items-center gap-3 group hover:bg-zinc-200 hover:cursor-pointer rounded-2xl transition-all border-b-2"
        >
          <img src={car} className="w-16 h-16 rounded-2xl" />
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <h1>Ben</h1>
              <p className="text-xs text-zinc-400">Show profile</p>
            </div>
            <p className="text-2xl">{">"}</p>
          </div>
        </Link>
        {listItems.map((item: any) => (
          <Link
            to={item.pathTo}
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
          </Link>
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
