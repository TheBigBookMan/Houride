import { eventData } from "../../utils/eventdata";

//TODO might need to get the predict search for location

//TODO create a list of events

//TODO create state for search criteria

//TODO have to input date selections

const Search = () => {
  return (
    <div>
      <h1>What are you looking for...?</h1>
      <form className="flex flex-col gap-2">
        <label className="flex flex-col font-bold">
          Location
          <input className="border-2 rounded-xl pl-1" type="text" />
        </label>
        <label className="flex flex-col font-bold">
          Event
          <select className="border-2 rounded-xl pl-1">
            {eventData.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col font-bold">
          Number of seats
          <input className="border-2 rounded-xl pl-1" type="text" />
        </label>
      </form>
    </div>
  );
};

export default Search;
