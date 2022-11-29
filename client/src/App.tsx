import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/common/Footer";

// * use graphQL/Apollo
//* SQL database PostGres
//* prisma
// * JWT authorization WITH cookies---- figure out the cookies/Vite combo

//TODO need to import react router so can link to other pages

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* <Signup /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;
