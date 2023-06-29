"use client";

import { useState } from "react";
import styles from "./services.module.css";
import Image from "next/image";
import {
  faCircleArrowRight,
  faBuildingColumns,
  faSeedling,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  const [b, setB] = useState(true);
  const [w, setW] = useState(false);
  const [p, setP] = useState(false);

  const handleActive = (data) => {
    if (data === "b") {
      setB(true);
      setP(false);
      setW(false);
    }
    if (data === "w") {
      setW(true);
      setB(false);
      setP(false);
    }
    if (data === "p") {
      setP(true);
      setW(false);
      setB(false);
    }
  };
  return (
    <div className={`${styles.container} ${styles.services}`}>
      <div className={styles.left}>
        <h2>PRODUCTS & SERVICES</h2>
        <div className={styles.text}>Solutions built for your needs.</div>
        <ul className={styles.leftUl}>
          <li>
            <button
              onClick={() => handleActive("b")}
              className={`${b && styles.active}`}
            >
              <div className={styles.first}>
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  width={25}
                  height={25}
                />
                <span>Business</span>
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                width={25}
                height={25}
                className={styles.arrow}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleActive("w")}
              className={`${w && styles.active}`}
            >
              <div className={styles.first}>
                <FontAwesomeIcon icon={faSeedling} width={25} height={25} />
                <span>Wealth</span>
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                width={25}
                height={25}
                className={styles.arrow}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleActive("p")}
              className={`${p && styles.active}`}
            >
              <div className={styles.first}>
                <FontAwesomeIcon icon={faUser} width={25} height={25} />
                <span>Personal</span>
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                width={25}
                height={25}
                className={styles.arrow}
              />
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={`${styles.imgContainer} ${styles.show}`}>
          <Image
            className={styles.img}
            fill={true}
            src="/merchant-services.jpg"
            alt=""
          />
          <div className={styles.content}>
            <div className={styles.mainContent}>
              <h2>
                <span>MERCHANT SERVICES</span>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  width={20}
                  height={20}
                />
              </h2>
              <div className={styles.serviceText}>
                <p>
                  Your business is so much more than just a place to work. It's
                  a goal, a dream, and a way of life. We've partnered with
                  BancCard to help you unleash your full potential. Learn more
                  about payment solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.imgContainer} `}>
          <Image
            className={styles.img}
            fill={true}
            src="/equipment-financing.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.imgContainer}`}>
          <Image
            className={styles.img}
            fill={true}
            src="/merchant-services.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
