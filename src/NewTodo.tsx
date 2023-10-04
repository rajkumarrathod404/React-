// import React from "react";
import { useState } from "react";
interface listType {
  text: string;
  id: any;
}

interface myobjType {
  text: string;
  id: any;
}
const newTodo = () => {
  const [list, setList] = useState<listType[]>([]);
  let HandleClick = () => {
    setList([...list, { text: "titl1 ", id: Date.now() }]);
    // console.log(list);
  };

  let handleDelete = (e: any) => {
    setList(list.filter((d) => d.id != e));
  };

  return (
    <>
      <h2>todos list :</h2>
      <button
        onClick={() => {
          HandleClick();
        }}
      >
        Add List
      </button>
      {/* {console.log(list.length)} */}
      {list.length > 0 ? (
        <ul>
          {list.map((e: myobjType) => {
            return (
              <li key={e.id}>
                {e.text + e.id}
                <div></div>
                <button onClick={() => handleDelete(e.id)}>delete</button>;
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default newTodo;
