import { eventData, ReactIcons } from "../../../utils/eventdata";
import { Link } from "react-router-dom";

interface Event {
  name: string;
  path: string;
}

//TODO add in react icons in the little bar as well

const Events = () => {
  return (
    <ul className="flex p-5 justify-center items-center w-full h-[80px] gap-2 overflow-x-scroll overflow-y-hidden">
      <Link
        to="/events"
        className="font-bold text-xs hover:cursor-pointer hover:text-sm"
      >
        View All
      </Link>
      {eventData.map((event: Event, idx: number) => {
        const Icon = ReactIcons[idx];
        return (
          <Link
            to={event.path}
            key={event.name}
            className="flex flex-col items-center font-bold text-xs hover:cursor-pointer hover:text-sm"
          >
            <Icon />
            <p>{event.name}</p>
          </Link>
        );
      })}
    </ul>
  );
};

export default Events;
