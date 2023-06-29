"use client";
import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import { useState } from "react";
import "./styles.css";

function page() {
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [routingTransit, setRouterTransit] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountType, setAccountType] = useState("");

  const [onGoingTransaction, setOngoingTransaction] = useState(null);

  const cancelTransaction = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <DashboardWrapper>
      <div className="transfer">
        <div className="transfer__container">
          <h1>Funds Transfer</h1>

          {onGoingTransaction ? (
            <div className="cont__transaction">
              <div onClick={handleSubmit} className="form__group purple__btn">
                <button>Continue Pending Transaction</button>
              </div>
              <div className="form__group red__btn">
                <button onClick={cancelTransaction}>Cancel Transaction</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form__group">
                <input
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                  type="text"
                  value={accountNumber}
                />
                <label>Account Number</label>
              </div>
              <div className="form__group">
                <input
                  onChange={(e) => setAccountName(e.target.value)}
                  required
                  type="text"
                  value={accountName}
                />
                <label>Account Name</label>
              </div>
              <div className="form__group">
                <input
                  onChange={(e) => setBankName(e.target.value)}
                  required
                  type="text"
                  value={bankName}
                />
                <label>Bank Name</label>
              </div>
              <div className="form__group">
                <input
                  onChange={(e) => setRouterTransit(e.target.value)}
                  required
                  type="text"
                  value={routingTransit}
                />
                <label>Routing Transit Number(RTN)/IBAN</label>
              </div>
              <div className="form__group">
                <input
                  onChange={(e) => setIfsc(e.target.value)}
                  required
                  type="text"
                  value={ifsc}
                />
                <label>IFSC/SWIFT CODE</label>
              </div>
              <div className="form__group">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  type="number"
                  value={amount}
                />
                <label>Amount</label>
              </div>
              <div className="form__group">
                <input
                  onChange={(e) => setRemark(e.target.value)}
                  required
                  type="text"
                  value={remark}
                />
                <label>Remarks</label>
              </div>
              <div className="form__group">
                <select
                  onChange={(e) => setAccountType(e.target.value)}
                  value={accountType}
                  name=""
                  id=""
                  required
                >
                  <option value="">Account Type</option>
                  <option value="Savings">Savings</option>
                  <option value="Checking">Checking</option>
                </select>
              </div>
              <div className="form__group btn">
                <button>Verify & Transfer</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default page;
