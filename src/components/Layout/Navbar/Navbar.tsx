import Link from "next/link";
import React from "react";
import SearchBar from "../../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sm:hidden block ">
        <Link href={"./"} className="btn btn-ghost text-xl">
          Emerald News
        </Link>
      </div>

      <div className="navbar bg-base-100 shadow-sm">
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
                <Link href={"./news"}>News</Link>
              </li>

              <li>
                <Link href={"./headlines"}>Headlines</Link>
              </li>

              <li>
                <Link href={"./news"}>Category</Link>
                <ul className="p-2">
                  <li>
                    <Link href={"./news"}>General</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Health</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Science</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Sports</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Technology</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Business</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Entertainment</Link>
                  </li>
                </ul>
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
              <Link href={"./news"}>News</Link>
            </li>
            <li>
              <Link href={"./headlines"}>Headlines</Link>
            </li>
            <li>
              <details>
                <summary>Category</summary>

                <ul className="p-2">
                  <li>
                    <Link href={"./news"}>General</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Health</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Science</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Sports</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Technology</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Business</Link>
                  </li>
                  <li>
                    <Link href={"./news"}>Entertainment</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Navbar;
