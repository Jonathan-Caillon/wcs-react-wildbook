import { WilderCard } from "../index";
import "./WilderGrid.css";
import wildersData from "./dataWilder";

const WilderGrid = () => {
  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wildersData.map((wilder, index) => (
          <WilderCard data={wilder} key={index} />
        ))}
      </section>
    </main>
  );
};

export default WilderGrid;
