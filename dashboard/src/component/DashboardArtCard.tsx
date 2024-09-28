import React, { FC } from "react";
import { IPageUrl } from "../utils/interface/pageurl";

function DashboardArtCard(pageUrl:IPageUrl){
  return (
    <div className=" bg-slate-500">
      {pageUrl.title}
      {pageUrl.path}
      aaaaa
    </div>
  );
}

export default DashboardArtCard;
