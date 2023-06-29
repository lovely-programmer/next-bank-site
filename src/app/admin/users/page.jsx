"use client";
import Datatable from "@/adminComponents/datatable/Datatable";
import Navbar from "@/adminComponents/navbar/Navbar";
import Sidebar from "@/adminComponents/sidebar/Sidebar";
import "./styles.css";

function page() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default page;
