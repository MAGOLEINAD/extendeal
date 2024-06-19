import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col flex-1 p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;