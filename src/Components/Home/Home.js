import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { UserContext } from "./../UseContext/UseContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [users, setUsers] = useContext(UserContext);
  // console.log(users);
  const navigate = useNavigate();
  return (
    <div className="homeSection">
      <Button
        variant="primary"
        className="m-3 text-center"
        onClick={() => navigate("/create")}
      >
        Add Data
      </Button>
      {/* table information */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, name, position, salary } = user;
            return (
              <tr key={user.id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{position}</td>
                <td>{salary}</td>
                <td>
                  <Button
                    className=" m-2"
                    variant="info"
                    onClick={() => navigate(`/read/${user.id}`)}
                  >
                    Read
                  </Button>
                  <Button
                    className="m-2"
                    variant="primary"
                    onClick={() => navigate(`/edit/${user.id}`)}
                  >
                    Edit
                  </Button>

                  <Button
                    className="m-2"
                    variant="danger"
                    onClick={() => navigate(`/delete/${user.id}`)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}

          {/* //  */}

          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
