import { EmailTemplate } from '@/components/component/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <chen@ejevent.co>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: 'hey your order was confirmed',
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
