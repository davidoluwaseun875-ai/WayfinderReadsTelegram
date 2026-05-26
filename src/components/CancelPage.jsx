import failedImg from "../assets/Payment-failed.jpg";

function CancelPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <img
        src={failedImg}
        alt="failed"
        style={{ width: "300px", borderRadius: "12px" }}
      />

      <h1>Payment Cancelled</h1>

      <a href="/">Try Again</a>

    </div>
  );
}

export default CancelPage;
