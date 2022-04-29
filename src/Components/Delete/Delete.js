import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../UseContext/UseContext";
import "./Delete.css";
const Delete = () => {
  const [users, setUsers] = useContext(UserContext);
  const { id } = useParams();

  const deleteUser = (id) => {
    console.log(typeof id);
    const restUser = users.filter((user) => user.id !== Number(id));
    console.log(restUser);
    setUsers(restUser);
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>you are deleting info of {id}</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Link to="/">
          <Button variant="secondary" className="m-3">
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteUser(id);
            }}
          >
            Delete
          </Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Delete;
