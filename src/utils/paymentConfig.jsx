const paymentConfig = (amount, logo) => ({
  public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
  tx_ref: Date.now().toString(),
  amount,
  currency: "NGN",
  payment_options: "card,banktransfer,ussd",

  customer: {
    email: "customer@email.com",
    phone_number: "08000000000",
    name: "Wayfinder User"
  },

  customizations: {
    title: "Wayfinder Reads",
    description: "Book Purchase",
    logo
  }
});

export default paymentConfig;
