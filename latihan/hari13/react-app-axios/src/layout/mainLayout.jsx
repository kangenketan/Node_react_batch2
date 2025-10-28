import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";

function MainLayout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="navbar bg-base-100 shadow-sm flex-1 ">
        <ul className="menu menu-horizontal px-1 ">
          <div className="bg-base-100 rounded-t-none p-2">Kangen Ketan</div>
          <li className="btn btn-ghost text-xl">
            <Link to="/">Movies</Link>
          </li>
          <li className="btn btn-ghost text-xl">
            <Link to="/category">Categories</Link>
          </li>
          <li className="btn btn-ghost text-xl">
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
