const API_URL = "https://books-library-dev.herokuapp.com/api/book/";

const getAll = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(API_URL, options);

  if (!res.ok) {
    throw new Error("Something went wrong...");
  }

  const books = await res.json();
  return books;
};

const getOneById = async (id, token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(API_URL + id, options);

  if (!res.ok) {
    throw new Error("Something went wrong...");
  }

  const book = await res.json();
  return book;
};

const bookService = {
  getAll,
  getOneById,
};

export default bookService;
