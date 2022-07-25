import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
import profile from "./HDFC-Bank-emblem.png";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (field <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    if (field >= balAnce) {
      alert("Sorry mate, you don't have enough cash to Withdraw");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw, "withdraw")) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdraw ₹" + withdraw);
  }
  function refrushForm() {
    setWithdraw("");
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
              <h1>Withdraw in your Account</h1>
              <h3>Balance : ₹ {availablebal}</h3>
              <h3>Withdraw</h3>

              <div className="g">
                <input
                  type="number"
                  placeholder="Enter Amount to be Withdrawn"
                  className="f"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.currentTarget.value)}
                />
              </div>
              <div className="h" isabled={!withdraw} onClick={handleCreate}>
                <button>WITHDRAW</button>
              </div>

              <p className="i"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
