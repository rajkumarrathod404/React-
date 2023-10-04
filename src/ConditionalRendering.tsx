import { useState } from "react";
import Third from "./Third";

const ConditionalRendering = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [visible, setVisible] = useState(false);
  // const[one,setOne]=useState(false)
  return (
    <>
      <button style={{marginTop:"80px"}}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Visible
      </button>
      {visible ? (
        <div style={{ marginTop: "1 0px" }}>
          <div>ConditionalRendering</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input
              checked={one}
              type="checkbox"
              onChange={() => setOne(!one)}
            />
            <input
              checked={two}
              type="checkbox"
              onChange={() => setTwo(!two)}
            />
            {<Third a={one} b={two} />}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConditionalRendering;
