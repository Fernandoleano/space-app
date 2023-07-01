const Header = () => {
  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <div>
          <a href="#">
            <img src="https://www.spacex.com/static/images/share.jpg" className="object-cover h-24 w-96" alt="logo" />
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-500 transition duration-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-500 transition duration-200">Space</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-500 transition duration-200">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;