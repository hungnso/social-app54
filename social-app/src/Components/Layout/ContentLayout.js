import React from 'react';

export default function ContentLayout({children}){
  return (
    <div className=" col-6 d-flex flex-column ps-1" >
      {children}
    </div>
  )
}