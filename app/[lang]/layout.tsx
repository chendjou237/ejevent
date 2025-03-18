import { NextIntlClientProvider } from 'next-intl';
import {notFound} from 'next/navigation';


export default async function LocalLayout({children, params: {lang}}: {children: React.ReactNode,
   params: {lang: string}}) {

  if (lang !== 'en' && lang !== 'fr') {
    notFound();
  }

  return (

    <NextIntlClientProvider locale="en">

      {children}
    </NextIntlClientProvider>
   
  )
}
