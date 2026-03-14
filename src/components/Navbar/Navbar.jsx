import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdOutlineTravelExplore } from "react-icons/md";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

// Clerk
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-6 px-4">

          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase text-white">
            <MdOutlineTravelExplore className="text-3xl" />
            <p>Travel</p>
            <p className="text-secondary">Pro</p>
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-white">
            
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            {/* Clerk Auth */}

            <SignedOut>
              <SignInButton mode="modal">
                <button className="hover:bg-primary text-white font-semibold hover:text-white rounded-md border-2 border-white px-6 py-2 duration-200 hidden md:block">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton afterSignOutUrl="/" />

                <SignOutButton>
                  <button className="hover:bg-red-500 text-red-400 font-semibold hover:text-white rounded-md border-2 border-red-400 px-4 py-2 duration-200 hidden md:block">
                    Logout
                  </button>
                </SignOutButton>
              </div>
            </SignedIn>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu openMenu={open} />
    </>
  );
}