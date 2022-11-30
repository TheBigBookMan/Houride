import car from "../../../styles/car.jpg";
import { AiFillStar } from "react-icons/ai";
import { fakeListingData } from "../../../utils/fakeListingData";

//TODO add in for each list item maybe a location as well

const Listings = () => {
  return (
    <div>
      <ul className="flex flex-wrap p-2 gap-5 h-[600px] overflow-y-scroll justify-center">
        {fakeListingData.map((data, index) => (
          <li className="flex flex-col" key={data.user + index}>
            <img className="w-72 rounded-2xl" src={car} />
            <div className="flex flex-row justify-between">
              <h1 className="font-bold">{data.car}</h1>
              <p className="flex items-center">
                {data.rating}
                <AiFillStar />
              </p>
            </div>
            <p className="text-zinc-400 text-sm">{data.event}</p>
            <p className="text-sm">User: {data.user}</p>
            <p className="font-bold">${data.price} p/h</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
