import React from 'react';

const Loading: React.FC = () => {
   return (
      <div className="flex items-center justify-center">
         <h2>Your Bookings are been Fetched...</h2>
         
         {/* Add any additional loading animation or content here */}
      </div>
   );
};

export default Loading;