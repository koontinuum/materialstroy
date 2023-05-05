import React from "react";
import styles from "./AboutStore.module.scss";
import { storeInfo } from "../../constants/storeInfo";

function AboutStore() {
  return (
    <div>
      <div className={styles.storeInfo}>
        {storeInfo.map((item) => (
          <div className={styles.card}>
            <h1>
              <img src={item.img} alt="" />
              {item.title}
            </h1>
            <p>{item.description1}</p>
            <p>{item.description2}</p>
            <p>{item.description3}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutStore;
