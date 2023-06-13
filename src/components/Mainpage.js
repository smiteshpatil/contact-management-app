import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import AddContact from "./AddContact";
import Edit from "./Edit";
import Home from "./Home";
import Chart from "./Chart";

const Mainpage = () => {
  return (
    <div class="grid grid-cols-4">
      <div class="col-span-1 bg-slate-300 lg:mr-10">
        <Sidebar />
      </div>
      <div class="col-span-3 bg-red">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/add" Component={AddContact}></Route>
          <Route path="/edit/:id" Component={Edit}></Route>
          <Route path="/Chart" Component={Chart}></Route>
         
        </Routes>
      </div>
    </div>
  );
};

export default Mainpage;
