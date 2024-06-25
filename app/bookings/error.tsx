'use client' // Error components must be Client Components
import { useEffect } from 'react'

import React from 'react';

const Error = ({
   error,
   reset,
 }: {
   error: Error & { digest?: string }
   reset: () => void
 }) => {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
    }, [error])
   
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
         <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
         <p className="text-lg text-gray-700 mb-8">We couldn&apos;t fetch your booking.</p>
         <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
            Try again
         </button>
      </div>
   );
};

export default Error;