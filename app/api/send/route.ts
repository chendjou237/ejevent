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
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const {email, name, phone, message} = req.body
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <chen@ejevent.co>',
      to: [email],
      subject: 'Hello world',
      react: EmailMessageTemplate({ firstName: name, phone: phone, message: message }),
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
