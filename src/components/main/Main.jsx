import Link from "next/link";
import Button from "../button/Button";
import styles from "./main.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: "url(/home-image.png)" }}
        />

        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Modern Banking. Lasting Relationships.</h1>
            <div className={styles.paragraph}>
              <p>
                From cultivating relationships, to thoughtful client services,
                to offering advanced products and services, we’re driven by one
                thing: you.
              </p>
            </div>
            <Button text="GET TO KNOW US" url="/" />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.boxes}>
            <Link href="">
              <Image
                src="/red-commercial-Real-Estate.svg"
                width={60}
                height={60}
                alt=""
              />
              <div className={styles.boxContent}>
                <span>COMMERCIAL REAL ESTATE</span>
                <FontAwesomeIcon
                  icon="fa-solid  fa-circle-arrow-right"
                  width={15}
                  height={15}
                />
              </div>
            </Link>
            <Link href="">
              <Image
                src="/red-Private-Banking.svg"
                width={60}
                height={60}
                alt=""
              />
              <div className={styles.boxContent}>
                <span>PRIVATE BANKING</span>
                <FontAwesomeIcon
                  icon="fa-solid  fa-circle-arrow-right"
                  width={15}
                  height={15}
                />
              </div>
            </Link>
            <Link href="">
              <Image
                src="/red-Treasury-Management-Solutions.svg"
                width={60}
                height={60}
                alt=""
              />
              <div className={styles.boxContent}>
                <span>TREASURY MANAGEMENT SOLUTIONS</span>
                <FontAwesomeIcon
                  icon="fa-solid  fa-circle-arrow-right"
                  width={15}
                  height={15}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
