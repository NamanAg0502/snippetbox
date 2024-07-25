import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import Image from 'next/image';
import React from 'react';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-muted">
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex items-center space-x-2 h-24">
          <Image src="/favicon.ico" width={36} height={36} alt="logo" />
          <h1 className="text-3xl font-bold">SnippetBox</h1>
        </div>
        <Navbar />
        <main className="w-full h-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default RootTemplate;
