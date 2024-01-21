import { logoColor } from "../assets"
import MessageIcon from "../assets/icons/MessageIcon"
function Header() {
  return (
    <header className="wrapper-md md:wrapper-lg flex justify-between items-center bg-red-200">
      <div className="h-14 w-32">
        <img src={logoColor.default} alt="kjj" className="f-full" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-x-4 text-iris">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
      <button className="flex gap-x-2 text-xs font-semibold items-center justify-center bg-primary text-white px-4 py-2 rounded-full">
        <MessageIcon className="h-4 w-4" />
        <span>Book Now</span>
      </button>
    </header>
  )
}

export default Header