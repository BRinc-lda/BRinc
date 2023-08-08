import vector from "../../assets/vector.png";
import "./PaymentDone.css";
import NavBar from "../../components/NavBar/NavBar";

function PaymentDone() {
  return (
    <div className="paymentDoneContainer">
      <NavBar />
      <div className="vectContent">
        <img src={vector} alt="A payment vector" className="vector" />
        <button className="btnVector">Done</button>
      </div>
    </div>
  );
}

export default PaymentDone;
