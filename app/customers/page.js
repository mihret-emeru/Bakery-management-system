"use client";

import { useState } from "react";
import Modal from "../components/Modal";

export default function CustomerPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [addCustomerOpen, setAddCustomerOpen] = useState(false);

  const customers = [
    {
      id: 1,
      name: "John D.",
      phone: "+25111872288",
      type: "Pre-order",
      totalOrders: 150,
      registered: "2024-12-12",
      status: "Active",
    },
    {
      id: 2,
      name: "Hali",
      phone: "+251918722881",
      type: "Wholesale",
      totalOrders: 20,
      registered: "2025-05-05",
      status: "Inactive",
    },
  ];

  // Filters
  const filtered = customers.filter((c) => {
    const matchesDate = dateFilter ? c.registered === dateFilter : true;
    const matchesStatus =
      statusFilter === "All" ? true : c.status === statusFilter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesDate && matchesStatus && matchesSearch;
  });

  // Card counts
  const activeCount = customers.filter((c) => c.status === "Active").length;
  const inactiveCount = customers.filter((c) => c.status === "Inactive").length;

  return (
    <div className="pro">
      <div className="container">
        <main className="main-content">
          <h1>Customers</h1>
          <p> Monitor all your bakery customers</p>
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
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="add-btn"
            onClick={() => setAddCustomerOpen(true)}
          >
            + Add Customer
          </button>

          <Modal
            open={addCustomerOpen}
            title="Add New Customer"
            onClose={() => setAddCustomerOpen(false)}
          >
            <input type="text" placeholder="Customer Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />

            <select>
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <div className="modal-actions">
              <button onClick={() => setAddCustomerOpen(false)}>Cancel</button>
              <button className="primary">Save Customer</button>
            </div>
          </Modal>

          {/* Middle Cards */}
          <div className="ccards">
            <div className="ccard">
              <div className="emoji-icon">🟢</div>
              <h3>Active Customers</h3>
              <p>{activeCount}</p>
            </div>

            <div className="ccard">
              <div className="emoji-icon">⛔ </div>
              <h3>Inactive Customers</h3>
              <p>{inactiveCount}</p>
            </div>
          </div>

          {/* Customer Table */}
          <h2>Recent Orders</h2>
          <table className="customer-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Customer Type</th>
                <th>Total Orders</th>
                <th>Registered Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.type}</td>
                  <td>{c.totalOrders}</td>
                  <td>{c.registered}</td>
                  <td>{c.status}</td>
                  <td>
                    <button>Details</button>
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
