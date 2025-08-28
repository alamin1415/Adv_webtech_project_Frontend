'use client';
import { use } from 'react';
// import Link from "next/Link";

export default function UserId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <>hello user id : {id}</>;
}

// export default function UserProfile() {
//   return <>hello</>;
// }
