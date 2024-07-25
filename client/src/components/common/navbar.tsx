import Link from 'next/link';

const links = [
  {
    id: 1,
    href: '/',
    label: 'Home',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-primary text-primary-foreground">
      <ul className="flex h-full items-center justify-center gap-4">
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            <li className="text-lg font-medium">{link.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
