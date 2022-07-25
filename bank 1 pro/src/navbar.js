import { Navbar, Container, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <div className="srk1">
        <div className="srk2">
          <div>
            <div className=""></div>
            <div>
              <div>
                <Nav>
                  <Nav.Link
                    className="navbar-brand"
                    activeClassName="navbar-brand--active"
                    href="#/"
                    title=" Home Page"
                  >
                    {" "}
                    Home{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="navbar-brand"
                    title="Create your Account"
                    href="#/CreateAccount/"
                  >
                    {" "}
                    CreateAccount{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="navbar-brand"
                    title="Deposit in your Account"
                    href="#/Deposit/"
                  >
                    Deposit{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="navbar-brand"
                    font
                    title="Withdraw from your Account"
                    href="#/Withdraw/"
                  >
                    WithDraw{" "}
                  </Nav.Link>
                  <Nav.Link
                    className="navbar-brand"
                    title="Track your Transactions"
                    href="#/AllData/"
                  >
                    All Data
                  </Nav.Link>
                </Nav>
              </div>
              <div>
                <br />

                <br />
              </div>

              <p className="i"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
