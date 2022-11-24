import car from "../../../styles/car.jpg";
import { AiFillStar } from "react-icons/ai";

const Listings = () => {
  return (
    <div>
      <ul className="flex flex-wrap p-2 gap-5 h-[600px] overflow-y-scroll">
        <li className="flex flex-col">
          <img className="w-40 rounded-lg" src={car} />
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">Aston Martin</h1>
            <p className="flex items-center">
              5<AiFillStar />
            </p>
          </div>
          <p className="text-zinc-400 text-sm">Weddings/Formals</p>
          <p>User: BennyBoy</p>
          <p>$1200 p/h</p>
        </li>
        <li className="flex flex-col">
          <img className="w-40 rounded-lg" src={car} />
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">Aston Martin</h1>
            <p className="flex items-center">
              5<AiFillStar />
            </p>
          </div>
          <p className="text-zinc-400 text-sm">Weddings/Formals</p>
          <p>User: BennyBoy</p>
          <p>$1200 p/h</p>
        </li>
        <li className="flex flex-col">
          <img className="w-40 rounded-lg" src={car} />
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">Aston Martin</h1>
            <p className="flex items-center">
              5<AiFillStar />
            </p>
          </div>
          <p className="text-zinc-400 text-sm">Weddings/Formals</p>
          <p>User: BennyBoy</p>
          <p>$1200 p/h</p>
        </li>
        <li className="flex flex-col">
          <img className="w-40 rounded-lg" src={car} />
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">Aston Martin</h1>
            <p className="flex items-center">
              5<AiFillStar />
            </p>
          </div>
          <p className="text-zinc-400 text-sm">Weddings/Formals</p>
          <p>User: BennyBoy</p>
          <p>$1200 p/h</p>
        </li>
        <li className="flex flex-col">
          <img className="w-40 rounded-lg" src={car} />
          <div className="flex flex-row justify-between">
            <h1 className="font-bold">Aston Martin</h1>
            <p className="flex items-center">
              5<AiFillStar />
            </p>
          </div>
          <p className="text-zinc-400 text-sm">Weddings/Formals</p>
          <p>User: BennyBoy</p>
          <p>$1200 p/h</p>
        </li>
      </ul>
    </div>
  );
};

export default Listings;
