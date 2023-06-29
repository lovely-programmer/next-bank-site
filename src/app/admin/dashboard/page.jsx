"use client";

import "./styles.css";
// import Chart from "@/adminComponents/chart/Chart";
// import Featured from "@/adminComponents/featured/Featured";
import Widget from "@/adminComponents/widget/Widget";
import Table from "@/adminComponents/table/Table";
import Navbar from "@/adminComponents/navbar/Navbar";
import Sidebar from "@/adminComponents/sidebar/Sidebar";

function page() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default page;
