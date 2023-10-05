import Link from 'next/link';
const Navbar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>MovieFlix</Link>
        </li>
        <li>
          <Link href='/movies'>Filmer</Link>
        </li>
        <li>
          <Link href='/tv'>Serier</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
