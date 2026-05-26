import PrayImg from "../assets/Pray.jpg";

function BookCard({ book, addToCart }) {
  return (
    <div className="product-card">

      <iframe
        src={book.url}
        title={book.title}
        className="book-frame"
      />

      <img
        src={PrayImg}
        alt="pray"
        className="overlay-img"
      />

      <h3>{book.title}</h3>

      <p>${book.price}</p>

      <button onClick={() => addToCart(book)}>
        Add To Cart
      </button>

    </div>
  );
}

export default BookCard;
