import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react';

export const experimental_ppr = true;

export const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <section className='pink_container'>
        <h1>{post.title}</h1>
      </section>
    </>
  );
};

export default page;
