import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import AllContent from "./AllContent";
import NewTodo from "./NewTodo";
import { useState } from "react";

import Context1 from "./Context1";
let videos = [
  {
    name: "coder Dost",
    view: "100 k",
    verified: true,
    ago: "a month",
    // id: commonIdFun,
  },
  {
    name: "Raj Channel",
    view: "1 M",
    verified: true,
    ago: "a month",
    // id: commonIdFun,
  },
  {
    name: "Tech Dost",
    view: "10 k",
    verified: false,
    ago: "a Year",
    // id: commonIdFun,
  },
];

function App() {
  const [data, setData] = useState<
    Array<{
      name: string;
      view: string;
      verified: boolean;
      ago: string;
    }>
  >([...videos]);

  // const [count, setCount] = useState(0);

  // const commonIdFun = (count: number): number => {
  //   setCount(count + 1);

  //   return count;
  // };
  // interface VideoType{

  //     name: String;
  //     view: String;
  //     verified: boolean;
  //     ago: String;
  //     // id: number;
  // }

  // const msg = "my message";
  // console.log(msg);

  // let mytype = { name: String, view: Number, verified: Boolean, ago: String };

  // const [list, setList] = useState<any>({
  //   name: "",
  //   view: "",
  //   verified: true,
  //   ago: "a month",
  //   // id: commonIdFun,
  // });

  // item.map((e) => {
  // const [list, setList] = useState<string[]>([]);
  // const [count, setCount] = useState(0);

  // let mylist = (count: number) => {
  //   setList((pre) => [...pre, "Added ", count.toString()]);
  // };

  // let myFunction = () => {
  //   setCount(count + 1);
  //   mylist(count);
  // };

  // setCount((count) => count + 1);
  // console.log(count);

  return (
    <>
      <Context1>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/todo">Todo List</Link>
                <li className="nav-item"></li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={<AllContent data={data} setData={setData} />}
            />
            <Route path="/todo" element={<NewTodo />} />
          </Routes>
        </Router>
      </Context1>
    </>
  );
}

export default App;
