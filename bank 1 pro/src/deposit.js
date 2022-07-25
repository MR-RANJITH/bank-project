import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
import profile from "./HDFC-Bank-emblem.png";
export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
    console.log(availablebal);
  }

  function refrushForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <>
      <div className="a">
        <div className="b">
          <div>
            <div className="c">
              <div className="d">
                <img src={profile} alt="profile" className="e" />
              </div>
            </div>
            <div>
              <h1>Deposit in your Account</h1>
              <h3>Balance : ₹ {availablebal}</h3>
              <h3>Deposit</h3>

              <div className="g">
                <input
                  type="number"
                  placeholder="Enter Amount to be Deposit"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.currentTarget.value))}
                  className="f"
                />
              </div>
              <div className="h" disabled={!deposit} onClick={handleCreate}>
                <button>DEPOSIT</button>
              </div>

              <p className="i"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
