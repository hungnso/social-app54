import React from 'react';

export default function RightSidebarLayout({children}){
  return (
    <div className=" col-3 border-start d-flex flex-column ps-1">
      {children}
    </div>
  )
}