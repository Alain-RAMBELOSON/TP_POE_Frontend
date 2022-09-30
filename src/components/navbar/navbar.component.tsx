import { Link } from "@solidjs/router";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/vehicle">Vehicles</Link>
        <Link href="/customer">Customers</Link>
      </nav>
    </>
  );
}
