import React from "react";
import { Link } from "react-router-dom";
import { PAGEURLS } from "../utils/const/PAGEURLS";

function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-900">
      <div className="p-3">
        <h2 className="text-white text-2xl">
          <Link to="/react-demo">βshort React Demo</Link>
        </h2>
      </div>
      <div className="menu">
        <ul className="hidden md:flex">
          {PAGEURLS.map((pageUrl) => {
            return (
              <li className="p-3">
                <Link to={pageUrl.path} className="text-white hover:font-bold">
                  {pageUrl.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
