import Events from "../components/features/home/Events";
import Listings from "../components/features/home/Listings";
import Filter from "../components/common/Filter";
import Extras from "../components/features/home/Extras";
import Search from "../components/common/Search";

//TODO have a spot to click to search and search component come up or something i dunno, copy airbnb

//TODO have the filter prop drilled from the state in here for the listings

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
