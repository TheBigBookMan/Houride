import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProfileSelect from "./pages/ProfileSelect";
import CarRental from "./pages/CarRental";
import CarListings from "./pages/CarListings";
import Footer from "./components/common/Footer";

// * use graphQL/Apollo
//* SQL database PostGres
//* prisma
// * JWT authorization WITH cookies---- figure out the cookies/Vite combo

//TODO need to import react router so can link to other pages
//TODO index the home page as we want that to be first on open

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <ProfileSelect /> */}
      {/* <CarRental /> */}
      <CarListings />
      <Footer />
    </div>
  );
}

export default App;
