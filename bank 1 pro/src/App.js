import "./styles.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./context";
import NavBar from "./navbar";
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Ranjith",
              email: "sanran0612gmail.com",
              password: "0612",
              balance: 10000
            }
          ]
        }}
      >
        <div className="container" style={{ padding: "10px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />

            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />

            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
