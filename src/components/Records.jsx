import styles from "./Records.module.css";

function Records() {
  return (
    <section className={styles.sectionRecord}>
      <h1>Patient Records</h1>

      <table>
        <tr>
          <th>Patient ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Hypertension</th>
          <th>Smoking History</th>
          <th>BMI</th>
          <th>Blood Glocuse Level</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>David</td>
          <td>10</td>
          <td>Male</td>
          <td>None</td>
          <td>None</td>
          <td>1</td>
          <td>1</td>
          <td>Negative</td>
        </tr>
      </table>
    </section>
  );
}

export default Records;
