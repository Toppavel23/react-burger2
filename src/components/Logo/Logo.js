import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";

import styles from "./Logo.module.css";

const logo = props => (
  <div className={styles.Logo}>
    <img src={BurgerLogo} alt="My Burger"></img>
  </div>
);

export default logo;
