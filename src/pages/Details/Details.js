import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";

import bookService from "../../features/books/bookService";
import dateParser from "../../utils/dateParser";

import Header from "../../components/Header/Header";

import styles from "./Details.module.css";

const initialState = {
  _id: "",
  name: "",
  author: "",
  image: "",
  createOn: "",
  lastUpdateOn: "",
  genre: {
    _id: "",
    name: "",
  },
};

// TODO: Refactor

export default function Details() {
  const { id } = useParams();

  const { token } = useSelector((state) => state.auth);
  const { books } = useSelector((state) => state.books);
  const bookFromState = books.filter((x) => x._id === id)[0];

  const [book, setBook] = useState(initialState);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (bookFromState) {
      setBook(bookFromState);
    } else {
      bookService
        .getOneById(id, token)
        .then(setBook)
        .catch(() => {
          setError(true);
        });
    }
  }, [book]);

  if (error) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.coverContainer}>
          <img src={book.image} alt="book cover" className={styles.cover} />
        </section>
        <section className={styles.detailsContainer}>
          <header className={styles.header}>
            <h3 className={styles.title}>{book.name}</h3>
          </header>
          <article className={styles.details}>
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
            <section className={styles.description}>
              <h4>Short description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis numquam minus magni dolore deserunt soluta iusto
                animi minima quo molestias. Harum omnis molestias incidunt atque
                dolorum ad officiis illum. Quaerat, veritatis voluptas
                cupiditate laudantium rem velit vel omnis! Est nostrum veritatis
                velit repellendus voluptatum nulla ipsa iste veniam, suscipit
                quasi eligendi fugit vero repellat ab natus officia error
                tempora voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                officiis ipsum eius esse illum aperiam similique unde suscipit!
                Fugiat deserunt voluptatibus reprehenderit. Quae consequuntur
                obcaecati porro, tempora necessitatibus alias, nam aut eum
                eveniet officiis commodi quos veniam saepe delectus praesentium.
              </p>
            </section>
          </article>
        </section>
      </section>
    </>
  );
}
