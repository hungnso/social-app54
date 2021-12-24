import React from 'react';
import ListFollow from '../Follow/ListFollow';
import Header from '../Header/Header';
import ListMenuBar from '../ListMenuBar/ListMenuBar';
import Navbar from '../Navbar/Navbar';
import LeftSidebarLayout from './LeftSidebarLayout';
import RightSidebarLayout from './RightSidebarLayout';

export default function MainLayout({ children }) {
  return (
    <div className="vh-100 d-flex" style={{ backgroundColor: '#F0F2F5' }}>
      <div>
        <Navbar />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <div className='shadow-sm' style={{ height: '5vh', backgroundColor: '#fff' }}>
          <Header />
        </div>
        <div className="flex-grow-1 d-flex" style={{ height: '95vh' }}>
          <LeftSidebarLayout>
            <ListMenuBar />
          </LeftSidebarLayout>
          {children}

          <RightSidebarLayout>
            <ListFollow />
          </RightSidebarLayout>
        </div>
      </div>
    </div>
  )
}