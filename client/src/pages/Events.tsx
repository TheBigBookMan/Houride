import { Routes, Route } from "react-router-dom";
import EventHome from "../components/features/events/EventHome";
import EventProfile from "../components/features/events/EventProfile";

//* This is the events page where is the selection of what events they like and when they select they are taken to that specific event page and can view all the cars that are available for that specific event

const Events = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-2">Events</h1>
      <Routes>
        <Route index element={<EventHome />} />
        <Route path="/*" element={<EventProfile />} />
      </Routes>
    </div>
  );
};

export default Events;
