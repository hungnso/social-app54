import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LeftSidebarLayout from './LeftSidebarLayout';

export default function MainLayout({ children }) {
  return (
    <div className="vh-100 d-flex ">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="bg-light" style={{height: '5vh'}}>
          <Header />
        </div>
        <div className="flex-grow-1 d-flex" style={{height: '95vh'}}>
          <LeftSidebarLayout>
            <div>
              chu ngoc thai
            </div>
          </LeftSidebarLayout>
            {children}
          {/* <ContentLayout>
            {children}
          </ContentLayout>

          <RightSidebarLayout>
            <div>
              chu ngoc thai
            </div>
          </RightSidebarLayout> */}
        </div>
      </div>
    </div>
  )
}