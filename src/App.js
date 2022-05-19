import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
