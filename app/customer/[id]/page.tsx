'use client';
import { use } from 'react';

export default function UserId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <>hello customer id : {id}</>;
}
