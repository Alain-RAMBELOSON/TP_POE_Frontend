import { Component, JSX } from "solid-js";
import { Link } from "@solidjs/router";

const Navbar: Component = (): JSX.Element => {
  return (
    <>
      <nav>
        <Link href="/vehicle">Vehicles</Link>
        <Link href="/customer">Customers</Link>
      </nav>
    </>
  );
};

export { Navbar };
