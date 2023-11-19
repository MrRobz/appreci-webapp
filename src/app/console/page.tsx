'use client';

import { SERVER_URL } from '@/config/api';
import { ReactNode, useEffect } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { useUser } from '@/data/user/hooks';
import { useRouter } from 'next/navigation';
import { LoaderIcon } from '@/components/atomic/loader';

export default function ConsoleRoot() {
  const router = useRouter();
  const { isError, isSuccess } = useUser();

  useEffect(() => {
    if (isError) {
      router.push('/');
    }

    if (isSuccess) {
      router.push('console/dashboard');
    }
  }, [isError, isSuccess, router]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoaderIcon />
    </div>
  );
}
