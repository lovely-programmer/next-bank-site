"use client";
import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import "./style.css";
import { useSession } from "next-auth/react";

function page() {
  const session = useSession();
  console.log(session);

  return (
    <DashboardWrapper>
      <div className="account">
        <div className="account__container">
          <h2>My Account</h2>
          <div className="account__details">
            <table>
              <tbody>
                <tr>
                  <td className="left">Account Number:</td>
                  <td className="right">200593040</td>
                </tr>
                <tr>
                  <td className="left">Routing Number:</td>
                  <td className="right">9203930</td>
                </tr>
                <tr>
                  <td className="left">Account Holder:</td>
                  <td className="right">Julian Paul</td>
                </tr>
                <tr>
                  <td className="left">Account Type:</td>
                  <td className="right">Checking</td>
                </tr>
                <tr>
                  <td className="left">Currency:</td>
                  <td className="right">USD</td>
                </tr>
                <tr>
                  <td className="left">Current Balance:</td>
                  <td className="right">
                    2000
                    <span>.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="left">Available Balance:</td>
                  <td className="right">
                    2000
                    <span>.00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default page;
