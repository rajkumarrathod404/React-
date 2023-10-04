import VideoTemplate from "./VideoTemplate";
import { useState } from "react";

interface AllContentProps {
  data: Array<{
    name: string;
    view: string;
    verified: boolean;
    ago: string;
  }>;
  setData: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        view: string;
        verified: boolean;
        ago: string;
      }[]
    >
  >;
}

const AllContent = ({ data, setData }: AllContentProps) => {
  const [obj, setObj] = useState({
    name: "",
    view: "",
    verified: false,
    ago: "now",
  });

  const addNewVideo = () => {
    // console.log(list);
    if (obj.name !== null) {
      setData([
        ...data,
        // {
        //   name: "newName",
        //   view: "100 k",
        //   verified: false,
        //   ago: "a week",
        // },
        obj,
      ]);
    } else {
      alert("please put some data");
    }
  };

  let HandleChange = (e: any) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    // console.log(obj);
  };

  return (
    <>
      <form method="get">
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            onChange={HandleChange}
            placeholder="title"
            required
          />
          <input
            name="view"
            type="text"
            onChange={HandleChange}
            placeholder="views"
            required
          />
        </label>
      </form>
      <button
        style={{ height: "50px", width: "150px" }}
        onClick={() => addNewVideo()}
      >
        Add Video
      </button>
      <div className="allvideos">
        {/* {setCount(count + 1)} */}
        {data.map((video) => {
          return (
            <>
              <div>
                <VideoTemplate
                  a={{
                    name: video.name,
                    view: video.view,
                    verified: video.verified,
                    ago: video.ago,
                    // id: count,
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllContent;
