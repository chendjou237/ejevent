import * as React from 'react';

interface EmailMessageTemplateProps {
  firstName: string;
  message: string;
  phone: string;
  
}

export const EmailMessageTemplate: React.FC<Readonly<EmailMessageTemplateProps>> = ({
  firstName,message, phone
}) => (
  (
    <div className="max-w-md mx-auto p-4 bg-green-100 shadow-md rounded-md">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">New Contact Form Submission</h2>
        <span className="text-sm text-gray-600">July 4, 2024</span>
      </div>
      <p className="mb-4">
        You have received a new message from {firstName}:
      </p>
      <p className="bg-white rounded-md p-3 shadow-md">{message}</p>
      <p className="bg-white rounded-md p-3 shadow-md">here is his phone number: {phone}</p>
    </div>
  )
)
interface EmailBookingTemplateProps {
  name: string;
  startDate: string;
  endDate: string;
}

export const EmailBookingTemplate: React.FC<Readonly<EmailBookingTemplateProps>> = ({
  name,startDate, endDate
}) => (
  (
    <div className="max-w-md mx-auto p-4 bg-blue-100 shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Booking Confirmation</h2>
      <p className="mb-4">Dear {name},</p>
      <p className="mb-4">
        We are thrilled to inform you that your decoration booking has been successfully confirmed for {startDate} to {endDate}. 
      </p>
      <p className="mb-4">
        You can view your reservations <a href={'ejevent.co/bookings'} className="text-blue-500 underline">here</a>. if you don't yet have an account sign in <a href="ejevent.co/sign-in">here</a>.
      </p>
      <p>
        Should you have any questions or need further assistance, feel free to reach out to us. We look forward to creating a memorable experience for you!
      </p>
    </div>
  
))