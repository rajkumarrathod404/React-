import React, { useState } from "react";
// import Login from "./Login";

const Signup = () => {
  const [listname, setListname] = useState<String[]>([]);
  const [listpass, setListpass] = useState<String[]>([]);
  const [listemail, setListemail] = useState<String[]>([]);
  const [show, setshow] = useState(false);
  const [checktick, setChecktick] = useState<boolean>(false);
  const [action, setAction] = useState("login");
  function signupFunction() {
    setAction("signup");
  }

  let setlogin = () => {
    setAction("login");
    setshow(!show);
  };
  return (
    <>
      {/* <div>{page ? <Login /> : ""}</div> */}
      {/* <button onClick={() => setpage(!page)}> log in </button> */}
      {action === "login" ? (
        <div
          className="h-100 d-flex align-items-center justify-content-center my-5 w-150"
          style={{ marginTop: "50px" }}
        >
          <form style={{ width: "500px", marginTop: "80px" }}>
            <h2>{action}</h2>

            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setListemail([...listemail, e.target.value]);
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onChange={(e) => {
                  setListpass([...listpass, e.target.value]);
                }}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={checktick}
                onChange={() => setChecktick(!checktick)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                i read all the document and agree to terms and consition
              </label>

              <label
                htmlFor="
           forgetpassword"
              >
                forget password? <a href="#">link !</a>
              </label>
            </div>

            <div
              className="d-flex align-items-center flex-direction-row "
              style={{ justifyContent: "space-evenly " }}
            >
              <button
                className={"btn-secondary"}
                style={{ width: "220px", height: "45px" }}
                // disabled={!checktick}
                onClick={signupFunction}
              >
                Sign - Up
              </button>
              <button
                className={"btn-primary"}
                style={{ width: "220px", height: "45px" }}
                disabled={checktick}
                onClick={setlogin}
              >
                Log - In
              </button>
            </div>
          </form>
          {show ? (
            <div>
              <p>{listemail.map((e) => e)}</p>
              <p>{listemail.map((e) => e)}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div
          className="h-100 d-flex align-items-center justify-content-center my-5 w-150"
          style={{ marginTop: "50px" }}
        >
          <form style={{ width: "500px", marginTop: "80px" }}>
            <h2>{action}</h2>

            <div
              className="name "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name" className="form-label">
                First Name
              </label>

              <input className="" type="text" style={{ height: "39px" }} />

              <label htmlFor="name" className="form-label">
                last Name
              </label>

              <input className="" type="text" style={{ height: "39px" }} />
            </div>

            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={checktick}
                onChange={() => setChecktick(!checktick)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                i read all the document and agree to terms and consition
              </label>

              <label
                htmlFor="
           forgetpassword"
              >
                forget password? <a href="#">link !</a>
              </label>
            </div>

            <div
              className="d-flex align-items-center flex-direction-row "
              style={{ justifyContent: "space-evenly " }}
            >
              <button
                className={
                  action === "signup" ? "btn-primary" : "btn-secondary"
                }
                style={{ width: "220px", height: "45px" }}
                // disabled={!checktick}
                onClick={signupFunction}
              >
                Sign - Up
              </button>
              <button
                className={action === "login" ? "btn-primary" : "btn-secondary"}
                style={{ width: "220px", height: "45px" }}
                // disabled={!checktick}
                onClick={() => setAction("login")}
              >
                Log - In
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
