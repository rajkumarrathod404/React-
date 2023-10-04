import { useState } from "react";
import "./App.css";


type mytype = {
  a: {
    name: String;
    view: String;
    verified: boolean;
    ago: String;
    // id: number;
  };
};

const VideoTemplate = (props: mytype) => {
  const [play, setplay] = useState(true);

  const setPlayFun = () => {
    setplay(!play);
  };
  {
    // /* <div className="template">
    //     <h2>{a.name}</h2>
    //     <img src="" alt="" />
    //     <div className="titles">
    //
    //     </div> */
  }
  return (
    <>
      <div className="wrap">
        <div className="heading">
          <h2>{props.a.name}</h2>
        </div>
        <div className="video">
          <p>views :{props.a.view}</p>
          <p>{props.a.verified ? "verified" : "Non Verified"}</p>
          <p>ago: {props.a.ago}</p>
          {/* <p>id :{props.a.id}</p> */}
        </div>
        <button onClick={setPlayFun}>
          {play ? "Play " + props.a.name : "Pause " + props.a.name}
        </button>
      </div>
    </>
  );
};

export default VideoTemplate;
