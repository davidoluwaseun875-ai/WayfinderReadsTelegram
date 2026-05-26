import successImg from "../assets/Payment-success.jpg";

function SuccessPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <img
        src={successImg}
        alt="success"
        style={{ width: "300px", borderRadius: "12px" }}
      />

      <h1>Payment Successful</h1>

      <a href="/">Go Home</a>

    </div>
  );
}

export default SuccessPage;
