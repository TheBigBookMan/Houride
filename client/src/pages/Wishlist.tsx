import car from "../styles/car.jpg";

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

//TODO import react icons star for faourites

//TODO rating, event, user, price

const Wishlist = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-2">Wishlist</h1>
      <div className="h-full w-full">
        <ul className="flex flex-col">
          {hardcode.map((info) => (
            <li className="border-solid border-2 border-black flex h-[100px]">
              <div className="flex flex-col">
                <img src={car} className="w-28" />
                <div className="flex items-center">
                  <h1 className="text-sm font-bold">{info.user}</h1>
                  <p>ST</p>
                </div>
              </div>
              <div className="flex w-full justify-around">
                <p>{info.event}</p>
                <p>{info.rating} ST</p>
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
