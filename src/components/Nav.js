import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full sticky bg-sky-700 text-left px-4  py-4">
      <Link to="/" className="text-white font-medium text-2xl">
        Contact management App
      </Link>
    </nav>
  );
};
export default Nav;
