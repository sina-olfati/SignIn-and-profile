import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";

import { notify } from "./toast";

import { validate } from "./validate";

// SPA
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHadler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You signed up successfully", "success");
    } else {
      notify("Invalid data", "error");
      setTouched({
        name: true,
        lastName: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHadler} className={styles.formContainer}>
        <h2 className={styles.header}>ثبت نام</h2>
        <div className={styles.formField}>
          <label>نام</label>
          <input
            className={errors.name && touched.name ? styles.uncompleted : styles.formInput}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
          <label>نام خانوادگی</label>
          <input
            className={errors.lastName && touched.lastName ? styles.uncompleted : styles.formInput}
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
        </div>
        <div className={styles.formField}>
          <label>ایمیل</label>
          <input
            className={errors.email && touched.email ? styles.uncompleted : styles.formInput}
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
        <label>رمز عبور</label>
          <input
            className={errors.password && touched.password ? styles.uncompleted : styles.formInput}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>تکرار رمز</label>
          <input
            className={errors.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
            <div className={styles.checkboxContainer}>
                <label>مرا به خاطر بسپار</label>
                <input
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                />
            </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">ورود</Link>
          <button type="submit">ثبت نام</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;

