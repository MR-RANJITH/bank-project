import React from "react";
import { useFormik } from "formik";
import UserContext from "./context";
import { useContext } from "react";
import profile from "./HDFC-Bank-emblem.png";
export default function App() {
  const ctx = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (!values.name);
      if (!values.email);
      if (!values.password);
      alert(`Sing In Successfully`);

      ctx.users.push({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        balance: 0
      });
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Password Required!!!";
      } else if (values.name.length > 15) {
        errors.name = "Must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "Required Emaid address!!!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required Password";
      } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters or less";
      }
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <div>
                <h2>Create Account</h2>
                <div>
                  <input
                    id="name"
                    type="name"
                    placeholder="Name"
                    className="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
                <div className="second-input">
                  <input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    className="name"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="second-input">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="name"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="login-button">
                  <button>SING IN</button>
                </div>

                <p className="link"></p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
