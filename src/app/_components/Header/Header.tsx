import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-end bg-gray-800 px-4 py-2 text-white">
        <a href="#" className="mr-4 rounded px-2 py-1 hover:bg-gray-700">
          Help
        </a>
        <a href="#" className="mr-4 rounded px-2 py-1 hover:bg-gray-700">
          Orders & Returns
        </a>
        <a href="#" className="mr-4 rounded px-2 py-1 hover:bg-gray-700">
          User Profile
        </a>
      </div>
      <div className="flex items-center justify-between bg-white px-4 py-4">
        <a href="#" className="text-xl font-bold">
          ECOM
        </a>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">
            Categories
          </a>
          <a href="#" className="hover:underline">
            Sale
          </a>
          <a href="#" className="hover:underline">
            Clearance
          </a>
          <a href="#" className="hover:underline">
            New Stock
          </a>
          <a href="#" className="hover:underline">
            Trending
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="focus:outline-none">
            <FaSearch className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
          <button className="focus:outline-none">
            <FaCartShopping className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
