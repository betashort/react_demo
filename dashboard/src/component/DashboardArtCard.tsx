import React, { FC } from "react";
import { IPageUrl } from "../utils/interface/pageurl";
import { Link } from "react-router-dom";

function DashboardArtCard(pageUrl: IPageUrl) {
  return (
    <div className="card">
      <button>
        <Link to={pageUrl.path} className="hover:font-bold">{pageUrl.title}</Link>
      </button>
    </div>
  );
}

export default DashboardArtCard;
