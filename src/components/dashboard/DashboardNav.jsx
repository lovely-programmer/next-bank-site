"use client";
import Link from "next/link";
import "./nav.css";
import { MdOutlineMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";

function DashboardNav({ toggle, setToggle }) {
  return (
    <div className="dashboardNav">
      <div className="dashboardNav__container container">
        <div className="authNav__logo">
          <Link href="/dashboard">
            <h2> AmericaBank </h2>
          </Link>
        </div>
        <div className="dashboardNav__content">
          <ul>
            <li>
              <div className="dashboard__profile">
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="profile_picture"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="profile_picture">
                  <img
                    src="/person_icon.png"
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar__mobile">
        <div className="navbar__mobile-content">
          <div className="navbar__mobile-container container">
            <ul>
              <li>
                {toggle ? (
                  <HiX onClick={() => setToggle(false)} />
                ) : (
                  <MdOutlineMenu onClick={() => setToggle(true)} />
                )}
              </li>
              <li className="nav__logo">
                <Link href="/dashboard">
                  <h2> AmericaBank </h2>
                </Link>
              </li>
              <li>
                <div className="dashboard__profile">
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="profile_picture"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <label htmlFor="profile_picture">
                    <img
                      src="/person_icon.png"
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
