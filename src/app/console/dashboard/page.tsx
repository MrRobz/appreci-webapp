'use client';

import { useUser } from '@/data/user/hooks';

export default function Dashboard() {
  const { data } = useUser();

  return <div></div>;
}
