import { eventData } from "../../../utils/eventdata";

const Events = () => {
  return (
    <ul className="flex p-5 justify-center items-center w-full h-[50px] gap-2 overflow-x-scroll overflow-y-hidden">
      {eventData.map((event) => (
        <li key={event} className="font-bold text-sm">
          {event}
        </li>
      ))}
    </ul>
  );
};

export default Events;
