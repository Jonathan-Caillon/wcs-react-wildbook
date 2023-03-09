import { WilderCard } from "../index";
import "./WilderGrid.css";
const WilderGrid = ({ wildersData }) => {
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
