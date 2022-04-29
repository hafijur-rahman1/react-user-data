import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./../UseContext/UseContext";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useContext(UserContext);
  //
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  //
  const updateId = (e) => {
    setId(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePosition = (e) => {
    setPosition(e.target.value);
  };
  const updateSalary = (e) => {
    setSalary(e.target.value);
  };
  const addUser = (e) => {
    // e.preventDefault();
    e.preventDefault();
    setUsers([
      ...users,
      { id: id, name: name, position: position, salary: salary },
    ]);
  };
  return (
    <div className="form">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={updateSalary}
            placeholder="Enter Salary"
          />
        </Form.Group>
        <Link to={"/"}>
          <Button
            //   onClick={navigate("/")}
            className="action_btn"
            variant="info"
            type="submit"
          >
            Back
          </Button>
        </Link>
        <Button className="action_btn m-3" variant="danger" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default Create;
