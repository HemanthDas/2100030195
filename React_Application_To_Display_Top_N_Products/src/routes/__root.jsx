import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React from "react";
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-3 flex gap-2 text-lg  bg-white">
        <Link to="/" className="[&.active]:font-bol">
          Home
        </Link>
        <Navbar />
        <hr />
      </div>
      <Outlet />
    </>
  ),
});
function Navbar() {
  const [sortBy, setSortBy] = React.useState("rat");
  const [sortOrder, setSortOrder] = React.useState("asc");
  return (
    <div className="flex">
      <select
        name=""
        id=""
        value={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="rat">Rating</option>
        <option value="price">Price</option>
        <option value="company">Company</option>
      </select>
      <select
        name=""
        id=""
        value={(e) => {
          setSortOrder(e.target.value);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="asc">Descending</option>
      </select>
    </div>
  );
}
