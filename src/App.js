import "./App.css";
import wildersData from "./dataWilder";
import { WilderGrid, Header, Footer } from "./components";
function App() {
  return (
    <div>
      <Header />
      <WilderGrid wildersData={wildersData} />
      <Footer />
    </div>
  );
}

export default App;
