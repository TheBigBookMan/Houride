import { eventData } from "../../utils/eventdata";
import { useState } from "react";

interface SearchTypes {
  location: string;
  event: string;
  seats: number;
}

//TODO might need to get the predict search for location

//TODO create state for search criteria

//TODO have to input date selections

const Search = () => {
  const [searchDetails, setSearchDetails] = useState<SearchTypes>({
    location: "",
    event: "",
    seats: 0,
  });

  //! FIX THE ANY
  const inputChange = (e: any) => {
    setSearchDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="border-b-2 pb-5">
      <h1>What are you looking for...?</h1>
      <form className="flex flex-col gap-2">
        <label className="flex flex-col font-bold">
          Location
          <input
            onChange={inputChange}
            value={searchDetails.location}
            className="border-2 rounded-xl pl-1"
            type="text"
          />
        </label>
        <label className="flex flex-col font-bold">
          Event
          <select
            onChange={inputChange}
            value={searchDetails.event}
            className="border-2 rounded-xl pl-1"
          >
            {eventData.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col font-bold">
          Number of seats
          <input
            onChange={inputChange}
            value={searchDetails.seats}
            className="border-2 rounded-xl pl-1"
            type="text"
          />
        </label>
        <button className="border-2 rounded-xl w-[150px] ml-1 p-1 bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 transition-all">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
