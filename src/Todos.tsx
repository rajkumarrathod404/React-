type num = {
  a: String[];
  b: number;
};

let Todos = (props: num) => {
  let deleteFunction = (element: String[], count: number) => {
    element.filter((e, count) => {});
  };

  //   const [item, setItem] = useState([]);
  return (
    <>
      {/* <h1>hello world {props.a}</h1> */}
      {props.a.map((e) => {
        return (
          <>
            <h2> {e}</h2>
            <button
              value={props.b}
              onClick={() => {
                deleteFunction(props.a, props.b);
              }}
            >
              delete
            </button>
          </>
        );
      })}
    </>
  );
};

export default Todos;
