import { useState } from "react";

const Todo1 = () => {
  const [List, setList] = useState<String[]>([]);
  //   const [id, setid] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //   const addlist = (title: String, desc: String) => {
  //     console.log("hello");
  //   };

  let setMyList = () => {
    setList([...List, title, desc]);
    console.log(List);

    // addlist(title, desc);
    const lItns = List.map((e) => {
      <ul>
        <li>{e} </li>
        <li>{e}</li>
        <div className="my-2"></div>
      </ul>;
    });
  };
  return (
    <>
      <p>
        {/* {lItns} */}
        
        </p>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="enter your title here !"
          />
          <input
            className=""
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="enter your Description here !"
          />
          <button
            className="btn-success btn-round py-1 mx-2"
            value={title}
            onClick={() => setMyList()}
          >
            Add todo{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo1;
