import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from "./Components/UseContext/UseContext";
import Home from "./Components/Home/Home";
import Delete from "./Components/Delete/Delete";
import Read from "./Components/Read/Read";
import Create from "./Components/Create/Create";
import Edit from "./Components/Edit/Edit";
function App() {
  return (
    <div className="">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="delete" element={<Delete />}>
              <Route path=":id" element={<Delete />} />
            </Route>
            <Route path="read" element={<Read />}>
              <Route path=":id" element={<Read />} />
            </Route>
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<Edit />}>
              <Route path=":id" element={<Edit />}></Route>
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
