import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Setting from "./components/Setting/Setting";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
