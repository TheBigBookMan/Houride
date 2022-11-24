import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";

// * use graphQL/Apollo
//* SQL database, maybe MySQL or PostGres
//* Sequelize or prisma

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
