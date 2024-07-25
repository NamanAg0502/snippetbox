'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface SnippetContextProps {
  snippets: Snippet[] | null;
  loading: boolean;
}
const SnippetContext = createContext<SnippetContextProps | null>(null);

export const SnippetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snippets, setSnippets] = useState<Snippet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch snippets');
        }
        const data = await response.json();
        setSnippets(data);
      } catch (error) {
        toast.error('Failed to fetch snippets');
      } finally {
        setLoading(false);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <SnippetContext.Provider value={{ snippets, loading }}>
      {children}
    </SnippetContext.Provider>
  );
};

export const useSnippets = () => {
  const context = useContext(SnippetContext);
  if (!context) {
    throw new Error('useSnippets must be used within a SnippetProvider');
  }
  return context;
};
