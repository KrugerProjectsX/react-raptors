import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddFlat from "./Pages/AddFlat";
function App() {
  return (
   <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/dashboard"} element={<Home/>}/>
      <Route path={"/flat/new"} element={<AddFlat/>}/>
   </Routes>
  );
};

export default App;
