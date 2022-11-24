import Events from "../components/features/home/Events";
import Listings from "../components/features/home/Listings";
import Filter from "../components/features/home/Filter";
import Extras from "../components/features/home/Extras";

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <Events />
      <Filter />
      <Listings />
      <Extras />
    </div>
  );
};

export default Home;
