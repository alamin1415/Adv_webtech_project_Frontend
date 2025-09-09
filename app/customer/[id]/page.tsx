'use client';
import { use } from 'react';

export default function customerId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <>hello i am customer id : {id}</>;
}
