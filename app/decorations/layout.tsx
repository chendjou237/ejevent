import React, { ReactNode } from 'react';
import { BookingDateProvider } from './../../contexts/BookingDateContext';

interface LayoutProps {
   children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <BookingDateProvider>
         <div className="layout">
            {/* Your layout content here */}
            {children}
         </div>
      </BookingDateProvider>
   );
};

export default Layout;