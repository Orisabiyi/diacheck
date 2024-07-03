import styles from "./Records.module.css";

function Records() {
  return (
    <section className={styles.sectionRecord}>
      <h1>Patient Records</h1>

      <table>
        <tr>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Patient Age</th>
          <th>Gender</th>
          <th>Hypertension</th>
          <th>Smoking History</th>
          <th>BMI</th>
          <th>BMI</th>
          <th>Blood Glocuse Level</th>
          <th>Diabetes Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </section>
  );
}

export default Records;
