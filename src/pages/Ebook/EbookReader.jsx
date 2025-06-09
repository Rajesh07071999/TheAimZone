// src/components/GutenbergBook.js
import React from "react";
import "./EbookReader.css";

const GutenbergBook = () => {
  return (
    <section className="book-section py-5" id="book">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4 text-primary">
          📖 Free Public Domain eBook
        </h2>
        <p className="lead mb-4">
          Enjoy reading <strong>Pride and Prejudice</strong> by Jane Austen — directly from Project Gutenberg.
        </p>
        <div className="book-frame-wrapper shadow rounded">
          <iframe
            src="https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
            title="Pride and Prejudice"
            width="100%"
            height="600px"
            className="book-frame"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GutenbergBook;
