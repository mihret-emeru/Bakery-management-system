"use client";
import { useState } from "react";
import Modal from "../components/Modal";
export default function Preorder() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    customer: "Walk-in", // default
    category: "",
    notes: "",
    quantity: 1,
  });

  // Handle input change
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle form submit
  const handleSave = () => {
    console.log("Saved preorder:", formData);
    // Here you can call API to save the preorder
    setOpen(false);
    // Reset form
    setFormData({
      customer: "Walk-in",
      category: "",
      notes: "",
      quantity: 1,
    });
  };

  const customers = [
    { id: 1, name: "John D." },
    { id: 2, name: "Selam W." },
    { id: 3, name: "Abel T." },
  ];

  const orders = [
    {
      id: "01",
      client: "Lal",
      date: "01/04/2025",
      category: "Cake",
      quantity: 2,

      status: "Pending",
    },
    {
      id: "02",
      client: "Papa",
      date: "11/04/2025",
      category: "Bread",
      quantity: 10,

      status: "Confirmed",
    },
  ];

  return (
    <div className="pro">
      <div className="container">
        <main className="main-content">
          <h1>PreOrder</h1>
          <p>
            Keep track of all customer customized orders, including special
            requests and modifications
          </p>
          <div className="order-divider"></div>
          <div className="filters">
            <input type="date" />
            <select>
              <option>All</option>
              <option>Pending</option>
              <option>Confirmed</option>
            </select>

            <input
              type="text"
              placeholder="Search by customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="btn" onClick={() => setOpen(true)}>
            + Add pre-order
          </button>

          <Modal
            open={open}
            title="Add new Preorder"
            onClose={() => setOpen(false)}
          >
            <div className="modal-form">
              {/* Customer select */}
              <div className="form-group">
                <label>Customer</label>
                <select
                  value={formData.customer}
                  onChange={(e) => handleChange("customer", e.target.value)}
                >
                  <option value="Walk-in">Walk-in</option>
                  {customers.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  placeholder="Enter category"
                />
              </div>

              {/* Product */}
              <div className="form-group">
                <label>Notes</label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Enter ur notes"
                />
              </div>

              {/* Quantity */}
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  min="1"
                />
              </div>

              {/* Buttons */}
              <div className="modal-buttons">
                <button className="btn cancel" onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button className="btn save" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </Modal>

          <h2>Recent Orders</h2>
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Client Name</th>
                <th>Date</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Notes</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.client}</td>
                  <td>{order.date}</td>
                  <td>{order.category}</td>
                  <td>{order.quantity}</td>
                  <td>
                    <button>View</button>
                  </td>
                  <td>{order.status}</td>
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
