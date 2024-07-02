import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <section className={styles.sideBar}>
      <h1>DiaCheck</h1>

      <ul>
        <NavLink to="new-analysis">
          <li>
            <span>New Analysis</span>
            <span>
              <img src="images/plus.svg" alt="a plus icon" />
            </span>
          </li>
        </NavLink>
        <NavLink to="patient-record">
          <li>
            <span>View Patient Records</span>
            <span>
              <img src="images/record.svg" alt="a record icon" />
            </span>
          </li>
        </NavLink>
      </ul>
    </section>
  );
}

export default Sidebar;
