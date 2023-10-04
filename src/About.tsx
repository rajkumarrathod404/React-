import { useContext } from "react";
import { MainContext } from "./Context1";
const About = () => {
  const data = useContext(MainContext);
  console.log(data);
  
  return (
    <>
      <div>About{data?.name}</div>
    </>
  );
};

export default About;
