'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Loading from './loading';
import SnippetTable from '@/components/snippet/snippet-table';
import { useSnippets } from '@/context/snippet-context';

export default function Home() {
  const { loading, snippets } = useSnippets();

  return (
    <div className="min-h-[calc(100vh-15rem)] w-full max-w-4xl mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className="my-5 w-full flex flex-col gap-6">
          <h1 className="text-2xl font-medium">Latest Snippets</h1>
          <div>
            {snippets ? (
              <SnippetTable snippets={snippets} />
            ) : (
              <div>No Snippets Found...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
