'use client'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

export default function QueryProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            {children} </QueryClientProvider>
    )
}