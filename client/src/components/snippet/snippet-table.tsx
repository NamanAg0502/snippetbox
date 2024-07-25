'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRouter } from 'next/navigation';

const SnippetTable = ({ snippets }: { snippets: Snippet[] }) => {
  const router = useRouter();

  snippets = snippets.sort((a, b) => a.ID - b.ID);

  return (
    <Table className="border">
      <TableCaption>no. of snippets: {snippets.length}</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead>Title</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {snippets.map((snippet) => (
          <TableRow
            key={snippet.ID}
            className="cursor-pointer"
            onClick={() => router.push(`/${snippet.ID}`)}
          >
            <TableCell className="text-primary hover:underline">
              {snippet.Title}
            </TableCell>
            <TableCell>{snippet.Created.toLocaleString()}</TableCell>
            <TableCell>#{snippet.ID}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SnippetTable;
