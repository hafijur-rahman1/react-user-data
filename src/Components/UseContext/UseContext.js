import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    { id: 1, name: "John", position: "xyz", salary: 2000 },
    { id: 2, name: "kobir", position: "asd", salary: 1000 },
    { id: 3, name: "kamal", position: "eee", salary: 3000 },
  ]);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
