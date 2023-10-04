let myFruiits = [
  { name: "vege", id: "1", isFruit: false },
  { name: "ladyfinger", id: "2", isFruit: false },
  { name: "apple", id: "3", isFruit: true },
];

const ListDisplay = () => {
  const allfruits = myFruiits.map((e) => (
    <>
      <ul>
        <li style={{ color: e.isFruit ? "blue" : "green" }}>
          {e.id} .{e.name}
        </li>
      </ul>
    </>
  ));
  return <>{allfruits}</>;
};

export default ListDisplay;
