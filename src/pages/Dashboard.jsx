import styles from "./Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <header className={styles.header}>
      <Sidebar />
      <Outlet />
    </header>
  );
}

export default Dashboard;
