import { listItems, ReactIcons } from "./listitems";
import { Link } from "react-router-dom";

//TODO statistics of how many booksing you've had, how much money generated from it, reviews left, ratings

//TODO bookings upcoming and past
//TODO maybe add in calendar for that

//TODO shortcuts to transactions etc

//TODO have a cancellation or change of request fee

const CarHome = () => {
  return (
    <div className="w-full h-full">
      <ul className="flex flex-col gap-5 p-2 w-full">
        {listItems.map((item: any, idx: number) => {
          const Icon = ReactIcons[idx];
          return (
            <Link
              to={item.pathTo}
              className="h-[50px] flex justify-between items-center group hover:bg-zinc-200 hover:cursor-pointer rounded-2xl transition-all p-2"
              key={item.title}
            >
              <div className="flex gap-2 items-center">
                <Icon className="text-3xl" />
                <div className="flex flex-col">
                  <p>{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.bio}</p>
                </div>
              </div>
              <p className="text-2xl">{">"}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CarHome;
