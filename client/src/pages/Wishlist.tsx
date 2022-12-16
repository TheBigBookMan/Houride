import car from "../styles/car.jpg";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

const hardcode = [
  {
    user: "Ben Smerd",
    event: "Formal",
    rating: "4.6",
    price: 34,
  },
  {
    user: "Ben Smerd",
    event: "Formal",
    rating: "4.6",
    price: 34,
  },
  {
    user: "Ben Smerd",
    event: "Formal",
    rating: "4.6",
    price: 34,
  },
  {
    user: "Ben Smerd",
    event: "Formal",
    rating: "4.6",
    price: 34,
  },
  {
    user: "Ben Smerd",
    event: "Formal",
    rating: "4.6",
    price: 34,
  },
  {
    user: "Ben Smerd",
    event: "Formal",
    rating: "4.6",
    price: 34,
  },
];

//TODO this is a favourites page for the user to save cars

//TODO mutations for removing from favourites

const Wishlist = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-2">Wishlist</h1>
      <div className="h-full w-full">
        <ul className="flex flex-col gap-2 p-2">
          {hardcode.map((info) => (
            <li className="border-b border-b-2 flex h-[100px]">
              <div className="flex flex-col">
                <img src={car} className="w-28" />
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold">{info.user}</h1>
                  <AiFillHeart className="cursor-pointer" />
                </div>
              </div>
              <div className="flex w-full justify-around">
                <p>{info.event}</p>
                <p className="flex justify-center">
                  {info.rating} <AiFillStar />
                </p>
                <p>${info.price} p/h</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wishlist;
