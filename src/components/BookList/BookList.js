import BookPreview from "../BookPreview/BookPreview";

import styles from "./BookList.module.css";

export default function BookList({ books }) {
  return (
    <section className={styles.bookList}>
      {books.map((book) => (
        <BookPreview book={book} key={book._id} />
      ))}
    </section>
  );
}
