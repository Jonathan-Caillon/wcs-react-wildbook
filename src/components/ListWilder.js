import Wilder from "./Wilder";

const ListWilder = ({ wildersData }) => {
  const listWilders = wildersData.map((wilder, index) => (
    <Wilder data={wilder} key={index} />
  ));
  return <section className="card-row">{listWilders}</section>;
};

export default ListWilder;
