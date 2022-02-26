import { Link, useNavigate } from "react-router-dom";

import dateParser from "../../utils/dateParser";

import styles from "./BookPreview.module.css";

export default function BookPreview({ book }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/library/" + book._id);
  };

  return (
    <article className={styles.bookPreview}>
      <img src={book.image} alt="" className={styles.image} />
      <section className={styles.details}>
        <h4>{book.name}</h4>
        <p>
          <Link to="">{book.author}</Link>
        </p>
        <p>
          Genre: <span>{book.genre.name}</span>
        </p>
        <section className={styles.timestamps}>
          <p>
            Created on: <span>{dateParser(book.createOn)}</span>
          </p>
          <p>
            Updated on: <span>{dateParser(book.lastUpdateOn)}</span>
          </p>
        </section>
      </section>
      <button className={styles.button} onClick={handleRedirect}>
        <img src="/images/polygon.png" alt="" />
      </button>
    </article>
  );
}
