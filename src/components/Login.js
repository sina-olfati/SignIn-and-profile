import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";

import { notify } from "./toast";

import { validate } from "./validate";

// Spa
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHadler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("با موفقیت وارد شدید", "success");
    } else {
      notify("اطلاعات را به درستی وارد کنید", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHadler} className={styles.formContainer}>
        <h2 className={styles.header}>ورود</h2>
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
        <div className={styles.formButtons}>
          <Link to="/signup">ثبت نام</Link>
          <button type="submit">ورود</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
