import { eventData } from "../../../utils/eventdata";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <ul className="flex p-5 justify-center items-center w-full h-[60px] gap-2 overflow-x-scroll overflow-y-hidden">
      {eventData.map((event) => (
        <Link
          to={event.path}
          key={event.name}
          className="font-bold text-xs hover:cursor-pointer hover:text-sm"
        >
          {event.name}
        </Link>
      ))}
    </ul>
  );
};

export default Events;
