import styles from "./NewAnalysis.module.css";

function NewAnalysis() {
  return (
    <section className={styles.sectionAnalysis}>
      <h2>Enter Patient Health Data</h2>
      <form>
        <label>Patient ID</label>
        <input type="text" placeholder="Patient ID" />

        <label>Patient Age</label>
        <input type="number" placeholder="Patient Age" />

        <label>Gender</label>
        <input type="" placeholder="Gender" />

        <label>Hypertension</label>
        <select>
          <option>True</option>
          <option>False</option>
        </select>

        <label>Smoking History</label>
        <select>
          <option>True</option>
          <option>False</option>
        </select>

        <label>BMI</label>
        <input type="number" placeholder="BMI" />

        <label>Glycated Hemoglobin</label>
        <select>
          <option>True</option>
          <option>False</option>
        </select>

        <label>Blood Glucose Level</label>
        <input type="number" placeholder="Blood Glucose Level" />
      </form>
    </section>
  );
}

export default NewAnalysis;
