import { EmailMessageTemplate } from '@/components/component/email-template';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <chen@ejevent.co>',
      to: ['chenxhenor@gmail.com'],
      subject: 'Hello world',
      react: EmailMessageTemplate({ firstName: 'john', message: "the app look gud", phone: "690596606"}),
      text: 'hey your order was confirmed',
    });
    console.log(data);
    
    
    if (error) {
        console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
export async function POST(req: any, res: NextApiResponse) {
  const body = await req.json()

  console.log("the body", body)
    const {email, name, phone, message} = body
  try {
   const { data, error } = await resend.emails.send({
     from: 'Acme <chen@ejevent.co>',
     to: ['chenxhenor@gmail.com', 'maivalaetitia@gmail.com'],
     subject: 'your decoration was Reserved',  
     react: EmailMessageTemplate({ firstName: name, phone: phone, message: message }),
     text: 'hey your order was confirmed',
   });
   console.log(data);
  if(error) console.error(error);
    
    if (error) {
        console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json("done");
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
