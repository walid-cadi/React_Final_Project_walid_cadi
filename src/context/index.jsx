

import { createContext, useContext, useState } from "react";



export const Mycontext = createContext();



export const MyProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

  const all = { userData, setUserData };


  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};

export const MyAppContext = () => useContext(Mycontext);