"use client";

import { useState } from "react";
import Modal from "../components/Modal";

export default function ProductPage() {
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Croissant",
      category: "Cake",
      quantity: 45,
      sellingPrice: 150,
      costPrice: 130,
      status: "Active",
    },
    {
      id: 2,
      name: "Bun",
      category: "Bread",
      quantity: 300,
      sellingPrice: 20,
      costPrice: 15,
      status: "Out of Stock",
    },
  ];

  const filtered = products.filter((p) => {
    const matchesDate = dateFilter ? p.date === dateFilter : true; // optional if products have date
    const matchesStatus =
      statusFilter === "All" ? true : p.status === statusFilter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesDate && matchesStatus && matchesSearch;
  });

  return (
    <div className="pro">
      <div className="container">
        <main className="main-content">
          <h1>Products</h1>
          <p>Track your products</p>
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
              <option>Out of Stock</option>
            </select>

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="add-btn" onClick={() => setCategoryOpen(true)}>
            + Add Category
          </button>
          <button className="add-btnn" onClick={() => setProductOpen(true)}>
            + Add Product
          </button>
          <Modal
            open={categoryOpen}
            title="Add New Category"
            onClose={() => setCategoryOpen(false)}
          >
            <input type="text" placeholder="Category Name" />

            <div className="modal-actions">
              <button onClick={() => setCategoryOpen(false)}>Cancel</button>
              <button className="primary">Save Category</button>
            </div>
          </Modal>

          <Modal
            open={productOpen}
            title="Add New Product"
            onClose={() => setProductOpen(false)}
          >
            <input type="text" placeholder="Product Name" />

            <select>
              <option>Select Category</option>
              <option>Bread</option>
              <option>Cake</option>
              <option>Pastry</option>
            </select>

            <input type="number" placeholder="Price" />
            <input type="number" placeholder="Stock Quantity" />

            <div className="modal-actions">
              <button onClick={() => setProductOpen(false)}>Cancel</button>
              <button className="primary">Save Product</button>
            </div>
          </Modal>

          {/* Products Table */}
          <h2>Recent Orders</h2>
          <table className="customer-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Selling Price</th>
                <th>Cost Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.quantity}</td>
                  <td>{p.sellingPrice} birr</td>
                  <td>{p.costPrice} birr</td>
                  <td>{p.status}</td>
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
