import { Routes, Route } from "react-router-dom";
import CarHome from "../components/features/carrenting/CarHome";
import BookingsInfo from "../components/features/carrenting/BookingsInfo";
import BookingHistory from "../components/features/carrenting/BookingHistory";

const CarRenting = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-2">Car Renting</h1>
      <Routes>
        <Route index element={<CarHome />} />
        <Route path="bookings-info" element={<BookingsInfo />} />
        <Route path="bookings-history" element={<BookingHistory />} />
      </Routes>
    </div>
  );
};

export default CarRenting;
