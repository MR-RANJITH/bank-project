import React from "react";
import { useFormik } from "formik";
import UserContext from "./context";
import { useContext } from "react";
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
      alert(`Account Created Successfull`);

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
    <>
      <div className="creaccount">
        <div class="container">
          <div className="account">
            <div class="card">
              <br />
              <center>
                <h3 className="heading">Create User Account</h3>
              </center>
              <div class="bg-primary card-header"></div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div class="mb-1">
                    <label className="form-label">Name:</label>
                    <input
                      class="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Your Name..."
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />

                    {formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div class="mb-1">
                    <label class="form-label"> Email Address: </label>
                    <input
                      class="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Mail..."
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Password: </label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password..."
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />

                    {formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <button type="submit" class="btn btn-primary" disabled="">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
