import Events from "../components/features/home/Events";
import Listings from "../components/features/home/Listings";
import Filter from "../components/features/home/Filter";
import Extras from "../components/features/home/Extras";
import Search from "../components/common/Search";

//TODO have a spot to click to search and search component come up or something i dunno, copy airbnb

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-2 relative">
      <Events />
      <Filter />
      <Listings />
      <Extras />
    </div>
  );
};

export default Home;
