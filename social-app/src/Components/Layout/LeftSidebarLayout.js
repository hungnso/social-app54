import React from 'react';

export default function LeftSidebarLayout({children}){
  return (
    <div className="col-3 border-end">
      {children}
    </div>
  )
}