import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <section className={styles.sideBar}>
      <h1>DiaCheck</h1>

      <ul>
        <NavLink to="new-analysis">
          <li>New Analysis</li>
        </NavLink>
        <NavLink to="patient-record">
          <li>View Patient Records</li>
        </NavLink>
      </ul>
    </section>
  );
}

export default Sidebar;
