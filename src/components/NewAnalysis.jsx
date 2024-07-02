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
        <div className={styles.customSelect}>
          <select>
            <option>True</option>
            <option>False</option>
          </select>
        </div>

        <label>Smoking History</label>
        <div className={styles.customSelect}>
          <select>
            <option>True</option>
            <option>False</option>
          </select>
        </div>

        <label>BMI</label>
        <input type="number" placeholder="BMI" />

        <label>Glycated Hemoglobin</label>
        <div className={styles.customSelect}>
          <select>
            <option>True</option>
            <option>False</option>
          </select>
        </div>

        <label>Blood Glucose Level</label>
        <input type="number" placeholder="Blood Glucose Level" />

        <button type="submit">Analyze Patient Data</button>
      </form>
    </section>
  );
}

export default NewAnalysis;
