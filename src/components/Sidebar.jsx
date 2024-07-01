import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <section className={styles.sideBar}>
      <ul>
        <li>
          <NavLink to="new-analysis">New Analysis</NavLink>
        </li>
        <li>
          <NavLink to="patient-record">View Patient Records</NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
