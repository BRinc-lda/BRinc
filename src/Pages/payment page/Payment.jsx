import NavBar from "../../components/NavBar/NavBar";
import PaymentForm from "../../components/Payment Compo/PaymentForm";
import "./Payment.css";

function Payment() {
  return (
    <div className="paymentContainer">
      <NavBar />
      <PaymentForm />
    </div>
  );
}

export default Payment;
