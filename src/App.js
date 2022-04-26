import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from "./Components/UseContext/UseContext";
import Home from "./Components/Home/Home";
import Delete from "./Components/Delete/Delete";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="delete" element={<Delete />}>
              <Route path=":id" element={<Delete />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
