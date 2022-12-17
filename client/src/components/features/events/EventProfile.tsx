import { useParams } from "react-router-dom";
import { fakeListingData } from "../../../utils/fakeListingData";
import car from "../../../styles/car.jpg";
import { AiFillStar } from "react-icons/ai";
import Filter from "../../common/Filter";

// TODO need useparams to get the event and then add data

//TODO need a listing section and a search component

const EventProfile = () => {
  const { eventname } = useParams();
  console.log(eventname);

  return (
    <div className="flex flex-col p-2 gap-4">
      <h1 className="font-bold text-lg">{eventname}</h1>
      <Filter />
      <ul>
        {fakeListingData.map((data, index) => (
          <li
            className="flex flex-col hover:bg-indigo-100 hover:cursor-pointer transition-all p-4 rounded-2xl"
            key={data.user + index}
          >
            <img className="w-72 rounded-2xl" src={car} />
            <div className="flex flex-row justify-between">
              <h1 className="font-bold">{data.car}</h1>
              <p className="flex items-center">
                {data.rating}
                <AiFillStar />
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-zinc-400 text-sm">{data.event}</p>
              <p className="text-sm">{data.seats} seats</p>
            </div>
            <p className="text-sm">User: {data.user}</p>
            <p className="font-bold">${data.price} p/h</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventProfile;
