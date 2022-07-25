import { useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
import profile from "./HDFC-Bank-emblem.png";

export default function AllData() {
  const ctx = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(ctx.users[0]);
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }
  function renderTableData() {
    return ctx.users.map((user, index) => {
      const { name, email, password, balance } = user; //destructuring
      return (
        <tr>
          <td>{name}</td>

          <td>{email}</td>

          <td>{password}</td>

          <td>{balance}</td>
        </tr>
      );
    });
  }
  return (
    <Card.Body>
      {" "}
      {
        <div className="a">
          <div className="b">
            <div>
              <div className="c">
                <div className="d">
                  <img src={profile} alt="profile" className="e" />
                </div>
              </div>
              <div>
                <h1>All Transaction</h1>
                <div>
                  <br />
                  <table id="users">
                    <tr class="user">{renderTableHeader()} </tr>
                    {renderTableData()}
                  </table>
                  <br />
                </div>

                <p className="i"></p>
              </div>
            </div>
          </div>
        </div>
      }
    </Card.Body>
  );
}
