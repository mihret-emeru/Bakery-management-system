"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const payments = [
    {
      id: "101",
      customer: "John D.",
      type: "Order",
      payType: "Cash",
      amount: 150,
      status: "Paid",
      date: "2025-12-02",
    },
    {
      id: "102",
      customer: "Selam W.",
      type: "Pre-order",
      payType: "Mobile Money",
      amount: 200,
      status: "Pending",
      date: "2025-12-05",
    },
    {
      id: "103",
      customer: "Abel T.",
      type: "Order",
      payType: "Card",
      amount: 350,
      status: "Paid",
      date: "2025-12-02",
    },
  ];

  // Filter logic
  const filtered = payments.filter((p) => {
    const matchesDate = dateFilter ? p.date === dateFilter : true;
    const matchesStatus =
      statusFilter === "All" ? true : p.status === statusFilter;
    const matchesSearch = p.customer
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesDate && matchesStatus && matchesSearch;
  });

  // Totals
  const totalPaid = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const totalPending = payments
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="pro">
      <div className="container">
        <main className="main-content">
          <h1>Payments</h1>
          <p> Review all payments</p>
          <div className="order-divider"></div>
          {/* Filters */}
          <div className="filters">
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>

            <input
              type="text"
              placeholder="Search by customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Middle Cards */}
          <div className="pcards">
            <div className="pcard">
              <div className="emoji-icon">✅</div>
              <h3>Total paid</h3>
              <p>{totalPaid} ETB</p>
            </div>

            <div className="pcard">
              <div className="emoji-icon">⏳</div>
              <h3>Total pending</h3>
              <p>{totalPending} ETB</p>
            </div>
          </div>

          {/* Payments Table */}
          <h2>Recent Orders</h2>
          <table className="payment-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Order Type</th>
                <th>Payment Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.customer}</td>
                  <td>{p.type}</td>
                  <td>{p.payType}</td>
                  <td>{p.amount}</td>
                  <td>{p.status}</td>
                  <td>{p.date}</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
