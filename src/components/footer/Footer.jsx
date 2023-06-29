import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.header}>Helpful Resources</div>
            <ul>
              <li>Careers</li>
              <li>Lost & Stolen Cards</li>
              <li>Bank Holidays</li>
              <li>Money Smart for Adult</li>
            </ul>
          </div>
          <div className={styles.middle}>
            <ul>
              <div className={styles.header} style={{ color: "#103962" }}>
                ""
              </div>
              <li>Newsroom</li>
              <li>Fraud & Security</li>
              <li>Money Smart for Small Businesses</li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.header}>Download App</div>
            <span>Business & Personal Banking</span>
            <div className={styles.imgContainer}>
              <div className={styles.img}>
                <img src="/google-play.svg" alt="" />
              </div>
              <div className={styles.img}>
                <img src="/apple-store.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.header}>Client Services</div>
            <a href="#">800-257-8316</a>
          </div>
          <div className={styles.right}>
            <p>
              American Bank is a local community bank in Texas. We offer
              valuable personal and business banking solutions including{" "}
              <a href="/business/deposits/business-checking">
                checking accounts
              </a>
              , <a href="#">savings accounts</a>,{" "}
              <a href="#">commercial loans</a>,{" "}
              <a href="" target="_blank">
                American Bank Equipment Finance
              </a>
              , <a href="/person">mortgage loans</a>,{" "}
              <a href="#">real estate loans</a>,{" "}
              <a href="#">wealth management</a> services,{" "}
              <a href="#">private banking services</a> and much more.{" "}
              <a href="#">Bank online</a>, with our mobile app, or visit one of
              our conveniently located <a href="#">Texas branches</a> in{" "}
              <a href="#/san-antonio-concord-plaza">San Antonio</a>,{" "}
              <a href="#/austin-westlake">Austin</a>,{" "}
              <a href="#/goliad">Goliad</a>, <a href="#/victoria">Victoria</a>,{" "}
              <a href="#/corpus-christi-uptown">Corpus Christi</a>,{" "}
              <a href="#/rockport">Rockport</a>,{" "}
              <a href="#/port-aransas">Port Aransas</a>, and{" "}
              <a href="#/houston-buffalo-speedway-loan-production-office">
                Houston
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          <div className={styles.content}>
            <ul>
              <li>© 2023 American Bank, N.A. &nbsp; &nbsp; | &nbsp; &nbsp; </li>
              <li>
                {" "}
                Member Independent Bankers Association of Texas &nbsp; &nbsp; |
                &nbsp; &nbsp;{" "}
              </li>
              <li>Member Texas Bankers Association </li>
            </ul>
            <ul>
              <li>
                <a href="#">Agreements & Disclosures &nbsp; | &nbsp; </a>
              </li>
              <li>
                <a href="#">Accessibility &nbsp; | &nbsp; </a>
              </li>
              <li>
                <a href="#">Sitemap </a>
              </li>
            </ul>
          </div>
          <div className={styles.member}>This is a boy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
