import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.css";

import { notify } from "./toast";

// Spa
import { Link } from "react-router-dom";

const Activate = () => {

    const [data, setData] = useState({
        activate: "",
      });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
            if(!data.activate) {
                errors.activate = "رمز فعال سازی را وارد کنید"
            } else if(data.activate !== "123456"){
                errors.activate = "رمز فعال سازی نامعتبر است"
            } else {
                delete errors.activate
            } 
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
        } else {
          notify("رمز فعال سازی اشتباه است", "error");
          setTouched({
            activate: true,
          });
        }
      };

  return (
    <div className={styles.container}>
      <form method="" action="https://google.com" onSubmit={submitHadler} className={styles.formContainer}>
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
          <input type="submit" value="فعال سازی"/>
          {/* <button type="submit">ورود</button> */}
        </div>
      </form>
      <ToastContainer/> 
    </div>
  )
}

export default Activate

