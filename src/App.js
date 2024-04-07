import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./style/style.css";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Card from "../src/pages/Card";
import ErrorPage from "../src/pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route> 
          <Route path="/About" Component={About}></Route>
          <Route path="/Card/:id" Component={Card}></Route>
          <Route path="*" Component={ErrorPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;