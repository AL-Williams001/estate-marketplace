import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-black ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Arthur
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              Estate
            </span>
          </h1>
        </Link>
        <form className="bg-black p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="text-black flex-grow w-24 sm:w-64"
          />
          <div className="relative">
            <FaSearch className="text-slate-600 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </form>
        <ul className="flex gap-4 font-bold">
          <Link to="/">
            <li className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className=" bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;