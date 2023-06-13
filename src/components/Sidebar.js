import { Link } from "react-router-dom";

function Sidebar() {

  const mystyle = {
    height: "100vh",
  };

  return (
    <div className="sidebar" style={mystyle}>
      <ul className="lg:text-2xl md:text-xl lg:m-4 md:m-2">
        <li className="lg:m-6 md:m-4  sm:m-2">
          <Link className="cursor-pointer hover:underline" to="/">Contacts</Link>
        </li>
        <li className="lg:m-6 md:m-4  sm:m-2">
          <Link className="cursor-pointer hover:underline" to="/Chart">Maps and Graph</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Sidebar;
