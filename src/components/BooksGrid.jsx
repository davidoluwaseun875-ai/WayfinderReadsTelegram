import BookCard from "./BookCard";

function BooksGrid({ books, addToCart }) {
  return (
    <div className="products-grid">

      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          addToCart={addToCart}
        />
      ))}

    </div>
  );
}

export default BooksGrid;
