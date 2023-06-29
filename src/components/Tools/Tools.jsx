import Image from "next/image";
import styles from "./Tools.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tools() {
  return (
    <div className={styles.container}>
      <div className={styles.tools}>
        <div className={styles.imgContainer}>
          <div
            className={styles.image}
            style={{ backgroundImage: "url(/phone.png)" }}
          />
        </div>
        <div className={styles.toolBox}>
          <h2>Digital Tools</h2>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <Image
                src="/dark-blue-Business-Digital-Banking.svg"
                width={65}
                height={65}
                alt=""
              />
              <div className={styles.promo}>
                Business <br />
                Bill Pay
              </div>
              <Link href="">
                <span>MORE</span>
                <FontAwesomeIcon
                  icon="fa-solid  fa-circle-arrow-right"
                  width={15}
                  height={15}
                />
              </Link>
            </div>
            <div className={`${styles.box} ${styles.color}`}>
              <div>
                <Image
                  src="/dark-blue-Mobile-deposit.svg"
                  width={65}
                  height={65}
                  alt=""
                  className={styles.dark}
                />
                <Image
                  src="/light-blue-Mobile-deposit.svg"
                  width={65}
                  height={65}
                  alt=""
                  className={styles.light}
                />
                <div className={styles.promo}>
                  Mobile <br />
                  Deposit
                </div>
                <Link href="">
                  <span>MORE</span>
                  <FontAwesomeIcon
                    icon="fa-solid  fa-circle-arrow-right"
                    width={15}
                    height={15}
                  />
                </Link>
              </div>
            </div>
            <div className={`${styles.box} ${styles.color}`}>
              <Image
                src="/dark-blue-Mobile-Card-Management.svg"
                width={65}
                height={65}
                alt=""
                className={styles.dark}
              />
              <Image
                src="/light-blue-Mobile-Card-Management.svg"
                width={65}
                height={65}
                alt=""
                className={styles.light}
              />
              <div className={styles.promo}>
                Mobile Card <br />
                Management
              </div>
              <Link href="">
                <span>MORE</span>
                <FontAwesomeIcon
                  icon="fa-solid  fa-circle-arrow-right"
                  width={15}
                  height={15}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
