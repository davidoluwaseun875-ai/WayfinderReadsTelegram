import { useEffect, useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import "../App.css";
import "../assets/style.css";

import books from "../data/books";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import BooksGrid from "../components/BooksGrid";
import Footer from "../components/Footer";

import useExchangeRate from "../hooks/useExchangeRate";

import paymentConfig from "../utils/paymentConfig";

import Logo from "../assets/Logo.png";

function Home() {

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const rate = useExchangeRate();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

  const addToCart = (book) => {
    const exists = cart.find((item) => item.id === book.id);

    if (exists) {
      alert("Book already added");
      return;
    }

    setCart([...cart, book]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalUSD = cart.reduce((acc, item) => acc + item.price, 0);

  const totalNGN = (totalUSD * rate).toFixed(2);

  const config = paymentConfig(totalNGN, Logo);

  const handleFlutterPayment = useFlutterwave(config);

  const makePayment = () => {

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    handleFlutterPayment({
      callback: (response) => {

        console.log(response);

        if (response.status === "successful") {
          window.location.href = "/success";
        } else {
          window.location.href = "/cancel";
        }

        closePaymentModal();
      },

      onClose: () => {}
    });
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">

      <Header />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Cart
        cart={cart}
        totalNGN={totalNGN}
        removeFromCart={removeFromCart}
        makePayment={makePayment}
      />

      <BooksGrid
        books={filteredBooks}
        addToCart={addToCart}
      />

      <Footer />

    </div>
  );
}

export default Home;
