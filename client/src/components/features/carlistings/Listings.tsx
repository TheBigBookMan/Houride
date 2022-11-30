import car from "../../../styles/car.jpg";
import { useState, useEffect } from "react";
import Filter from "../../common/Filter";
import { fakeListingData } from "../../../utils/fakeListingData";
import { AiFillStar } from "react-icons/ai";

//TODO prop drill in state for what listing criteria want selected

const Listings = () => {
  return (
    <div>
      <Filter />
      <ul className="flex flex-col flex-wrap p-2 gap-5 justify-center">
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
