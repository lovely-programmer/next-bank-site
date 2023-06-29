"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { useState } from "react";
import Login from "./Login";
import { SlLocationPin } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { PiLockKeyBold } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  { id: 1, title: "Business", url: "#" },
  { id: 2, title: "Wealth", url: "#" },
  { id: 3, title: "Personal", url: "#" },
  { id: 4, title: "Our Story", url: "#" },
];

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className={styles.list}>
        <ul>
          <li>
            <Link href="">
              <span>
                <FaRegComment fontSize={16} />
              </span>
              CONTACT
            </Link>
          </li>
          <li>
            <Link href="">
              <span>
                <SlLocationPin fontSize={16} />
              </span>
              LOCATIONS & ATMS
            </Link>
          </li>
          <li>
            <Link href="">
              <span>
                <BsSearch fontSize={16} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link className={styles.logo} href="/">
            AmericaBank
          </Link>
          <div className={styles.links}>
            {links.map((link) => (
              <Link className={styles.link} key={link.id} href={link.url}>
                {link.title}
              </Link>
            ))}

            <div className={styles.signIn}>
              <button
                onClick={() => setShowLogin(true)}
                className={styles.button}
              >
                <PiLockKeyBold fontSize={20} />
                <span>LOGIN</span>
              </button>

              {showLogin && <Login setShowLogin={setShowLogin} />}
            </div>
          </div>
        </div>

        <div className={styles.mobile}>
          <Link className={styles.logo} href="/">
            AmericaBank
          </Link>
          <div className={styles.mobileContent}>
            <div className={styles.signIn}>
              <button
                onClick={() => setShowLogin(true)}
                className={styles.button}
              >
                <span>LOGIN</span>
              </button>
              {showLogin && <Login setShowLogin={setShowLogin} />}
            </div>
            <div className={styles.bar}>
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
