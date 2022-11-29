import Search from "../components/common/Search";

const CarListings = () => {
  return (
    <div className="flex flex-col p-5 gap-5">
      <h1 className="font-bold text-xl">Listings</h1>
      <Search />
    </div>
  );
};

export default CarListings;
