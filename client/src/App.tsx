import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CarRenting from "./pages/CarRenting";
import CarListings from "./pages/CarListings";
import Inbox from "./pages/Inbox";
import Wishlist from "./pages/Wishlist";
import Bookings from "./pages/Bookings";
import Transaction from "./pages/Transaction";
import TransactionHistory from "./pages/TransactionHistory";
import Footer from "./components/common/Footer";
import { Link, Routes, Route } from "react-router-dom";

// * use graphQL/Apollo
//* SQL database PostGres
//* prismag
// * JWT authorization WITH cookies---- figure out the cookies/Vite combo
//* Could use SupaBase for authentication etc
//* GraphQL subscriptions are for the instant chatting it seems and maybe the instant requesting etc

//TODO need to import react router so can link to other pages
//TODO index the home page as we want that to be first on open

//TODO have the "register car" in the navbar somewhere

//TODO car page with all the information about the car rental etc with contact info and a way for the user to message the car rental person

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Transaction />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/rental/*" element={<CarRenting />} />
        <Route path="/listings" element={<CarListings />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
