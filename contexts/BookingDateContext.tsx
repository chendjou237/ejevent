'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingDateContextType {
   startTime: Date;
   endTime: Date;
   setStartTime: (date: Date) => void;
   setEndTime: (date: Date) => void;
   
 }

 type Props = {
  children: ReactNode;
};

const BookingDateContext = createContext<BookingDateContextType | undefined>(undefined);

export const BookingDateProvider = ({ children }: Props) => {
   const [startTime, setStartTime] = useState(new Date());
   const [endTime, setEndTime] = useState(new Date());
   return (
     <BookingDateContext.Provider value={{ startTime, endTime, setStartTime, setEndTime }}>
       {children}
     </BookingDateContext.Provider>
   );
 };

export const useBookingDate = () => {
   const context = useContext(BookingDateContext);
   if (!context) {
     throw new Error("useBookingDate must be used within a BookingDateProvider");
   }
   return context;
 };