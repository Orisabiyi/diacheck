import styles from "./Dashboard.module.css";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <header className={styles.header}>
      <Sidebar />
    </header>
  );
}

export default Dashboard;
