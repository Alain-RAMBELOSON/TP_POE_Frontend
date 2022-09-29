import type { Component } from "solid-js";
import { Link } from "@solidjs/router";

const Navbar: Component = () => {
  return (
    <>
      <nav>
        <Link href="/vehicle">Vehicles</Link>
        <Link href="/customer">Customers</Link>
      </nav>
    </>
  );
};

export default Navbar;
