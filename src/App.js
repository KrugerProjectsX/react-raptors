import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddFlat from "./Pages/AddFlat";
import RegisterUser from "./Pages/RegisterUser";
function App() {
  return (
   <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/home"} element={<Home/>}/>
      <Route path={"/flat/new"} element={<AddFlat/>}/>
      <Route path={"/register"} element={<RegisterUser/>}/>
   </Routes>
  );
};

export default App;
