import { useEffect, useState } from "react";

let API = "https://jsonplaceholder.typicode.com/users";
const FetchApi = () => {
  const [list, setList] = useState<any>([]);
  //   const FetchApi = async (url: any) => {
  //     try {
  //       let user = await fetch(url);
  //       let data = user.json();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   let pass = useId();
  const FetchMyApi = async (url: any) => {
    try {
      let data = await fetch(url);
      let validData = await data.json();
      if (validData.length > 0) {
        setList([...validData]);
      }
      //   console.log(validData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchMyApi(API);
    //   method: "post",body:{}

    //   .then((res) => res.json())
    //   .then((res) => setList([...res]));
  }, []);
  //   console.log(list);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>mail</th>
          </tr>
        </thead>

        <tbody>
          {list.map((ele: any, i: number) => {
            //   console.log(ele.id);

            return (
              <tr key={i}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>

                <td>{ele.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchApi;
