import { useEffect, useState } from "react";

function useExchangeRate() {
  const [rate, setRate] = useState(1600);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=NGN")
      .then((res) => res.json())
      .then((data) => {
        if (data?.rates?.NGN) {
          setRate(data.rates.NGN);
        }
      })
      .catch(() => {
        setRate(1600);
      });
  }, []);

  return rate;
}

export default useExchangeRate;
