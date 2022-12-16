import React from "react";
import books from "../data/books.json";
import Book from "./Book";

const Books = () => {
  return (
    <div className="w-full pl-2">
      <h3 className="text-xl mb-4 text-center font-bold dark:text-white">
        LIVRES
      </h3>
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default Books;
