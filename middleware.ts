import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'


const intlMiddleware = createMiddleware({
  locales: ['en','fr'],
  defaultLocale: 'en',
})

const isProtectedRoute = createRouteMatcher(['dashboard/(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()

  return intlMiddleware(req)
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
