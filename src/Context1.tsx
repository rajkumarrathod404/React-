import React from "react";
export const MainContext = React.createContext<any>(0);
const Context1 = ({ children }: { children: any }) => {
  return (
    <>
      <MainContext.Provider value={{ name: "Raj", Age: 22 }}>
        {children}
      </MainContext.Provider>
    </>
  );
};

export default Context1;
