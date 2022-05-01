import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UseContext/UseContext";
import "./Edit.css";

const Edit = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();
  //
  const restUsers = users.filter((user) => user.id === Number(id));

  //
  const [name, setName] = useState(restUsers[0].name);
  const [position, setPosition] = useState(restUsers[0].position);
  const [salary, setSalary] = useState(restUsers[0].salary);
  //
  const editName = (e) => {
    setName(e.target.value);
    const edit_name = name;
    restUsers[0].name = edit_name;
  };
  // console.log(name);
  const editPosition = (e) => {
    setPosition(e.target.value);
    const edit_Position = position;
    restUsers[0].position = edit_Position;
  };
  const editSalary = (e) => {
    setSalary(e.target.value);
    const edit_salary = salary;
    restUsers[0].salary = edit_salary;
  };
  //
  const editUser = (e) => {
    // e.preventDefault();
    e.preventDefault();
    setUsers([...users]);
  };
  return (
    <div>
      <Form>
        <h5>ID no: {restUsers[0].id}</h5>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={restUsers[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            // value={position}
            onChange={editPosition}
            placeholder={restUsers[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            // value={salary}
            onChange={editSalary}
            placeholder={restUsers[0].salary}
          />
        </Form.Group>
        <Link to={"/"}>
          <Button
            //   onClick={navigate("/")}
            className="action_btn m-3"
            variant="info"
          >
            Back
          </Button>
          <Button
            onSubmit={() => editUser}
            className="action_btn m-3"
            variant="danger"
            edit_name
          >
            Edit
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
