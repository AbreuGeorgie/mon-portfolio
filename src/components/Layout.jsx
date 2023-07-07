import Sidebar from './Sidebar'
//import "../../style.scss";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    document.title = "Portfolio de Georgie Abreu";
  }, []);
  return (
    <div className="page">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;