'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupAxios } from '@/config/axios';
import { LeftNav } from '@/components/atomic/left-nav';

const queryClient = new QueryClient();
setupAxios();

export default function ConsoleLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex h-full min-h-full w-full min-w-full bg-background">
        <LeftNav />
        {children}
      </main>
    </QueryClientProvider>
  );
}
