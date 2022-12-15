import car from "../../../styles/car.jpg";
import { useState, useEffect } from "react";
import Filter from "../../common/Filter";
import { fakeListingData } from "../../../utils/fakeListingData";
import { AiFillStar } from "react-icons/ai";

//TODO prop drill in state for what listing criteria want selected

//TODO import the query for data graphql

//TODO create the filter functions

//! problem with the prop for the setFilterChoice function

const Listings = () => {
  const [filterChoice, setFilterChoice] = useState<string>("Lowest price");
  const [listData, setListData] = useState<CarList[]>([]);
  // const {error, data} = useQuery

  //TODO input query data for the listings
  console.log(filterChoice);

  // useEffect(() => {
  //   let listingData = data?;
  //   if (listingData) {
  //     checkFilter(listingData);
  //   }
  // }, [filterChoice, data]);

  const checkFilter = (listingData: CarList[]) => {
    if (filterChoice === "Lowest price") {
      let lowPrice = listingData
        .slice(0)
        .sort((a, b) => (a.price < b.price ? -1 : 1));
      setListData(lowPrice);
    } else if (filterChoice === "Highest price") {
      let highPrice = listingData
        .slice(0)
        .sort((a, b) => (a.price > b.price ? -1 : 1));
      setListData(highPrice);
    } else if (filterChoice === "Event alphabetical") {
      console.log("alpha ");
      // let eventAlph
    } else if (filterChoice === "Event reverse-alphabetical") {
      console.log("reverse alpha");
      //let eventRevAlph
    } else if (filterChoice === "Number seats asc") {
      let numAsc = listingData
        .slice(0)
        .sort((a, b) => (a.seats < b.seats ? -1 : 1));
      setListData(numAsc);
    } else if (filterChoice === "Number seats desc") {
      let numDesc = listingData
        .slice(0)
        .sort((a, b) => (a.seats > b.seats ? -1 : 1));
      setListData(numDesc);
    } else if (filterChoice === "Top rated") {
      let topRated = listingData
        .slice(0)
        .sort((a, b) => (a.rating > b.rating ? -1 : 1));
      setListData(topRated);
    } else if (filterChoice === "Lowest rated") {
      let lowRated = listingData
        .slice(0)
        .sort((a, b) => (a.rating < b.rating ? -1 : 1));
      setListData(lowRated);
    }
  };

  return (
    <div>
      <Filter setFilterChoice={setFilterChoice} />
      <ul className="flex flex-col flex-wrap p-2 gap-5 justify-center">
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

export default Listings;
