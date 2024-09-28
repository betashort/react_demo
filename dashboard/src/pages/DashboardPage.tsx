import React from "react";
import { PAGEURLS } from "../utils/const/PAGEURLS";
import DashboardArtCard from "../component/DashboardArtCard";
import { IPageUrl } from "../utils/interface/pageurl";

function DashboardPage() {
  return (
    <>
    <div className="grid grid-cols-3">
      {PAGEURLS.map((pageUrl: IPageUrl, idx) => {
        return (
          <>
              <div className="m-3 border-solid border-2 border-collapse border-slate-600">
                <DashboardArtCard key={idx} {...pageUrl} />
              </div>
          </>
        );
      })}
      </div>
    </>
  );
}

export default DashboardPage;
