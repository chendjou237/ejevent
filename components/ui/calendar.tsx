"use client"

import { DayPicker } from "react-day-picker"

import {QronoCalendar} from 'booking_calendar'
import { useState,useEffect } from 'react'
import {useBookingDate} from '@/contexts/BookingDateContext'
import { datetime } from "drizzle-orm/mysql-core"
import { toast } from "sonner"
import moment from "moment"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {

  const bookingConfig = {
    defaultCapacity:3,
    bookingInterval: 120
}

  const { setStartTime, setEndTime, startTime} = useBookingDate()
 
  
  const next_available_start = new Date();
    next_available_start.setHours(next_available_start.getHours() + Math.round(next_available_start.getMinutes()/60));
    next_available_start.setMinutes(0, 0, 0); 
    
    const next_available_end = new Date(next_available_start.valueOf())
    next_available_end.setHours(next_available_end.getHours() + 1)
    const handleSelectEndTime = (date: Date)=> {
      if(date < startTime){
        toast.warning('the selected date is not valide, please consider another interval')
      }
      else setEndTime(date)
    }
    
    const styles = {
      primaryColor: '#0f172a',
      panelBackgroundColor: 'white',
      secondaryColor: 'white',

    }

  return (
    <QronoCalendar
    defaultAvailable={true}
    styles={styles}
    onSelectStart={(date)=>setStartTime(date!)}
    onSelectEnd={(date)=>setEndTime(date!)}
    bookingPickerType={'dateRangePicker'}
    bookingConfig={bookingConfig}

    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
