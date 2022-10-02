import { Component, JSX } from "solid-js";
import { Link } from "@solidjs/router";
import "./styles/header-navbar.style.css";

const HeaderNavBar: Component = (): JSX.Element => {
  return (
    <>
      <div class="header-navbar">
        <div class="header">
          <h1 class="header-title">Rent</h1>
        </div>
        <div class="navbar">
          <nav>
            <ul class="navlink-list">
              <li>
                <Link href="/vehicle" class="navlink">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link href="/customer" class="navlink">
                  Customers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export { HeaderNavBar };
