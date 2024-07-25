'use client';

import SnippetCard from '@/components/snippet/snippet-card';
import { useSnippets } from '@/context/snippet-context';
import Loading from '../loading';

const SnippetPage = ({ params }: { params: { id: string } }) => {
  const { snippets, loading } = useSnippets();

  if (loading || !snippets) return <Loading />;

  const snippet = snippets.find((s) => s.ID === parseInt(params.id));
  return (
    <div className="max-w-xl my-10 mx-auto">
      {snippet ? (
        <SnippetCard snippet={snippet} />
      ) : (
        <div>No snippet be found.</div>
      )}
    </div>
  );
};

export default SnippetPage;
