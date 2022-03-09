import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./pages/Home";
import Tablos from "./Tablos";

function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<Home />} />

          {/* <Tablos></Tablos> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
