import Wilder from "./Wilder";
import "../css/ListWilder.css";
const ListWilder = ({ wildersData }) => {
  const listWilders = wildersData.map((wilder, index) => (
    <Wilder data={wilder} key={index} />
  ));
  return <section className="card-row">{listWilders}</section>;
};

export default ListWilder;
