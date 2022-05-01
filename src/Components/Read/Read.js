import React from "react";
import "./Read.css";
import { useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { UserContext } from "./../UseContext/UseContext";
import { Button } from "react-bootstrap";

const Read = () => {
  const [users, setUsers] = useContext(UserContext);

  const { id } = useParams();

  const selectedUser = users.filter((user) => user.id === Number(id));
  console.log(selectedUser);
  return (
    <div>
      <h4>read section </h4>
      <section className="read">
        <h5>Name : {selectedUser[0].name}</h5>
        <p> user id: {selectedUser[0].id}</p>
        <p>Position: {selectedUser[0].position}</p>
        <p>Salary: {selectedUser[0].salary}</p>
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </section>
    </div>
  );
};

export default Read;
