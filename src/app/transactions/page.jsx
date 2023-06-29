import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import "./styles.css";

function page() {
  const transaction = [];
  return (
    <DashboardWrapper>
      <div className="transactionHistory admin__content">
        <div className="transactionHistory__container">
          <h1>Transactions History</h1>
          <div className="transactionHistory__table">
            <table>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Type</td>
                  <td>Amount</td>
                  <td>To/From</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {transaction?.length > 0 &&
                  transaction?.map((trans) => (
                    <tr key={trans?._id}>
                      <td> {trans?.date} </td>
                      <td>{trans?.transaction_type}</td>
                      <td>{trans?.amount}</td>
                      <td>{trans?.name}</td>
                      <td>{trans?.remark}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {!transaction.length && (
              <div style={{ marginTop: "20px" }}>
                <h2>No Transaction</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default page;
