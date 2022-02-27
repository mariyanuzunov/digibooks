import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import styles from "./Settings.module.css";

const GENERAL_SETTINGS = [
  "NOTIFICATIONS AND EMAILS",
  "USER MANAGEMENT",
  "PHYSICAL LIBRARIES",
  "READING EVENTS",
  "INVOICING",
  "BOOK STATISTICS",
  "READERS STATISTICS",
  "EVENTS STATISTICS",
];

const BOOK_SETTINGS = [
  "MANAGE GENRES",
  "BOOK VISIBILITY",
  "AUTHORS DATABASE",
  "BOOK COVERS",
];

export default function Settings() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.settings}>
          <header className={styles.settingsHeader}>
            <h3 className={styles.settingsTitle}>General Settings</h3>
          </header>
          <OptionsList options={GENERAL_SETTINGS} />
        </section>
        <section className={styles.settings}>
          <header className={styles.settingsHeader}>
            <h3>Book Settings</h3>
            <button className={styles.btnAdd}>Add New</button>
          </header>
          <OptionsList options={BOOK_SETTINGS} />
        </section>
      </section>
    </>
  );
}

function OptionsList({ options }) {
  return (
    <>
      {options.map((x) => (
        <p key={x} className={styles.settingsOption}>
          <Link to="">{x}</Link>
          <span className={styles.line}></span>
        </p>
      ))}
    </>
  );
}
