"use client";
import Link from "next/link";
import React, {  useState } from "react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
 
  const [currentPath, setCurrentPath] = useState<string>("");

  const handleLinkClick = (url: string) => {
    setCurrentPath(url);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sm:hidden block ">
        <Link href={"./"} className="btn btn-ghost text-xl">
          Emerald News
        </Link>
      </div>

      <div className="navbar bg-base-100 shadow-sm sticky top-0 glass md:px-10 z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link
                  href={"./news"}
                  className={`${currentPath == "./news" ? "text-yellow-500" : ""}
                hover:text-yellow-500 text-sm
                `}
                  onClick={() => handleLinkClick("./news")}
                >
                  News
                </Link>
              </li>

              <li>
                <Link
                  href={"./headlines"}
                  className={`${currentPath == "./headlines" ? "text-yellow-500" : ""}
                hover:text-yellow-500 text-sm
                `}
                  onClick={() => handleLinkClick("./headlines")}
                >
                  Headlines
                </Link>
              </li>

              <li onClick={() => handleLinkClick("/")}>
                <ThemeToggle />
              </li>
            </ul>
          </div>
          <Link href={"./"} className="btn btn-ghost text-xl sm:block hidden">
            Emerald News
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href={"./news"}
                className={`${currentPath == "./news" ? "text-yellow-500" : ""}
                hover:text-yellow-500 text-sm
                `}
                onClick={() => handleLinkClick("./news")}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href={"./headlines"}
                className={`${currentPath == "./headlines" ? "text-yellow-500" : ""}
                hover:text-yellow-500 text-sm
                `}
                onClick={() => handleLinkClick("./headlines")}
              >
                Headlines
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">{currentPath != "./headlines" && <SearchBar />}</div> */}
      </div>
    </>
  );
};

export default Navbar;
