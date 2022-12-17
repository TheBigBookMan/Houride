import { eventData, ReactIcons } from "../../../utils/eventdata";
import { Link } from "react-router-dom";

const EventHome = () => {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {eventData.map((item: any, idx: number) => {
        const Icon = ReactIcons[idx];
        return (
          <Link
            to={item.path}
            className="h-[70px] flex justify-between items-center group hover:bg-zinc-200 hover:cursor-pointer rounded-2xl transition-all p-2 px-4"
            key={item.name}
          >
            <div className="flex gap-3 items-center">
              <Icon className="text-3xl" />
              <div className="flex flex-col">
                <p>{item.name}</p>
              </div>
            </div>
            <p className="text-2xl">{">"}</p>
          </Link>
        );
      })}
    </ul>
  );
};

export default EventHome;
