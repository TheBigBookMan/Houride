import { Routes, Route } from "react-router-dom";
import CarHome from "../components/features/carrenting/CarHome";
import RentingInfo from "../components/features/carrenting/RentingInfo";
import RentingHistory from "../components/features/carrenting/RentingHistory";

const CarRenting = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-2">Car Renting</h1>
      <Routes>
        <Route index element={<CarHome />} />
        <Route path="renting-info" element={<RentingInfo />} />
        <Route path="renting-history" element={<RentingHistory />} />
      </Routes>
    </div>
  );
};

export default CarRenting;
