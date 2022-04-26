import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UseContext/UseContext";
import "./Delete.css";
const Delete = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const restUser = users.filter((user) => user.id !== id);
  console.log(restUser);

  return (
    <div>
      <p>Delete section of: {id}</p>
    </div>
  );
};

export default Delete;
