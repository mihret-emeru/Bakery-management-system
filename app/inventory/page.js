"use client";

import { useState } from "react";
import Modal from "../components/Modal";
export default function InventoryPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [restockOpen, setRestockOpen] = useState(false);

  const items = [
    {
      id: 1,
      name: "Flour",
      quantity: 50,
      unit: "KG",
      minLevel: 20,
      status: "Low",
    },
    {
      id: 2,
      name: "Sugar",
      quantity: 120,
      unit: "KG",
      minLevel: 30,
      status: "Good",
    },
    {
      id: 3,
      name: "Oil",
      quantity: 25,
      unit: "L",
      minLevel: 10,
      status: "Good",
    },
    {
      id: 4,
      name: "Butter",
      quantity: 8,
      unit: "KG",
      minLevel: 15,
      status: "Low",
    },
  ];

  const filtered = items.filter((item) => {
    const matchesDate = dateFilter ? item.date === dateFilter : true; // optional if you add date
    const matchesStatus =
      statusFilter === "All" ? true : item.status === statusFilter;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesDate && matchesStatus && matchesSearch;
  });

  return (
    <div className="pro">
      <div className="container">
        <main className="main-content">
          <h1>Inventory</h1>
          <p>Monitor stock levels</p>

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
              <option>Low</option>
              <option>Good</option>
            </select>

            <input
              type="text"
              placeholder="Search item..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="add-item"
            onClick={() => setAddOpen(true)}
          >
            + Add Item
          </button>
          <button
            type="button"
            className="restock-btn"
            onClick={() => setRestockOpen(true)}
          >
            Restock
          </button>

          {/* Add Item Modal */}
          <Modal
            open={addOpen}
            title="Add New Item"
            onClose={() => setAddOpen(false)}
          >
            <input placeholder="Item Name" />
            <input type="number" placeholder="Quantity" />
            <input placeholder="Unit (Kg, Pcs...)" />

            <div className="modal-actions">
              <button onClick={() => setAddOpen(false)}>Cancel</button>
              <button className="primary">Save</button>
            </div>
          </Modal>

          {/* Restock Modal */}
          <Modal
            open={restockOpen}
            title="Restock Item"
            onClose={() => setRestockOpen(false)}
          >
            <select>
              <option>Select Item</option>
              <option>Flour</option>
              <option>Sugar</option>
            </select>

            <input type="number" placeholder="Add Quantity" />

            <div className="modal-actions">
              <button onClick={() => setRestockOpen(false)}>Cancel</button>
              <button className="primary">Update</button>
            </div>
          </Modal>

          {/* Inventory Table */}
          <h2>Stock</h2>
          <table className="customer-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Min Level</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.minLevel}</td>
                  <td>{item.status}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
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
