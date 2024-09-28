import React from 'react'
import { PAGEURLS } from '../utils/const/PAGEURLS'
import DashboardArtCard from '../component/DashboardArtCard'
import { IPageUrl } from '../utils/interface/pageurl'

function DashboardPage() {
  return (
    <>
    {
    PAGEURLS.map( (pageUrl: IPageUrl, idx) => {
      return(
        <>
        <div className='flex justify-center items-center'>
         <DashboardArtCard key={idx} {...pageUrl}/>
         </div>
        </>
      )
    }
    )
    }
    </>
  )
}

export default DashboardPage