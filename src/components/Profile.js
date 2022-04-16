import React from 'react'

// images
import menu from "../images/menu.svg"
import camera from "../images/camera.svg"

// Spa
import { Link } from "react-router-dom";

// styles
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={styles.container}>
      <menu>
        <ul>
            <li><img src={menu} className={styles.svg}/></li>
            <li><Link to="/activate">بازگشت</Link></li>
        </ul>
      </menu>
      <header>
        <div className={styles.background}> 
            <div className={styles.redLine}></div>
            <div className={styles.profile}>
                <img src={camera}/>
            </div>
        </div>

        <div className={styles.details}>
            <div className={styles.items}>
                <h4>درخواست ها</h4>
                <p>28</p>
            </div>
            <div className={styles.items}>
                <h4>دیده شده</h4>
                <p>49</p>
            </div>
            <div className={styles.items}>
                <h4>تماس گرفته</h4>
                <p>10</p>
            </div>
        </div>
      </header>
      <section>

      </section>
    </div>
  )
}

export default Profile
