import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";

import { notify } from "./toast";

import { validate2 } from "./validate2";

// Spa
import { Link } from "react-router-dom";

// axios
import axios from "axios";

const Activate = () => {

    const [data, setData] = useState({
        activate: "",
      });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate2(data, "activate"));
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
          notify("فعال سازی با موفقیت انجام شد", "success");
          const user = {
            activated: true,
          };
          axios.post("http://chl-api.rahkardigital.com/API/V1/User/register?password=&firstname=&lastname=&phone=",
           { user })
            .then(res => {
              console.log("posting data", res);
              console.log(res.data);
            }).catch(err => console.log(err))
          window.location.replace("/profile");
        } else {
          notify("رمز فعال سازی اشتباه است", "error");
          setTouched({
            activate: true,
          });
        }
      };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHadler} className={styles.formContainer}>
        <h2 className={styles.header}>فعال سازی حساب</h2>
        <div className={styles.formField}>
          <input
            className={errors.activate && touched.activate ? styles.uncompleted : styles.formInput}
            type="text"
            name="activate"
            value={data.activate}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.activate && touched.activate && <span>{errors.activate}</span>}
        </div>

        <div className={styles.formButtons}>
        <Link to="/register">بازگشت</Link>
          <button type="submit">ورود</button>
        </div>
      </form>
      <ToastContainer/> 
    </div>
  )
}

export default Activate

