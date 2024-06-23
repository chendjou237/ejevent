"use client"

import { DayPicker } from "react-day-picker"

import {QronoCalendar} from 'booking_calendar'
import { useState } from 'react'
import {useBookingDate} from '@/contexts/BookingDateContext'


export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  
  const {startTime, endTime, setStartTime, setEndTime} = useBookingDate()
  const next_available_start = new Date();
    next_available_start.setHours(next_available_start.getHours() + Math.round(next_available_start.getMinutes()/60));
    next_available_start.setMinutes(0, 0, 0); 
    
    const next_available_end = new Date(next_available_start.valueOf())
    next_available_end.setHours(next_available_end.getHours() + 1)
    
    


  return (
    <QronoCalendar
    defaultAvailable={true}
    onSelectStart={(date)=>setStartTime(date!)}
    onSelectEnd={(date)=>setEndTime(date!)}
    bookingPickerType={'timeIntervalPicker'}
    
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
