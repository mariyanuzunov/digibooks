import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBooks, reset } from "../../features/books/bookSlice";

import Header from "../../components/Header/Header";
import BookList from "../../components/BookList/BookList";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Library.module.css";

export default function Library() {
  const dispatch = useDispatch();
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getBooks());

    return () => dispatch(reset());
  }, [isError, message, dispatch]);

  return (
    <>
      <Header />
      <section className={`container ${styles.p15}`}>
        <header className={styles.header}>
          <h2 className={styles.title}>ALL BOOKS</h2>
          <input
            type="search"
            name="search"
            className={styles.searchInput}
            id="txtSearch"
            placeholder="Search"
          />
        </header>
        {isLoading ? <Spinner /> : <BookList books={books} />}
      </section>
    </>
  );
}
