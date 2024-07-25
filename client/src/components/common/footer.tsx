import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-primary text-primary-foreground">
      <div className="flex items-center justify-center gap-1 h-full">
        <span>Powered by</span>
        <Link href="" target="_blank" className="font-medium">
          Go
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
