"use client";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  // Summary cards mock data
  const summary = [
    { title: "Total Orders", value: 120, icon: "🛒" },
    { title: "Total Pre-orders", value: 30, icon: "📋" },
    { title: "Total Revenue ($)", value: 4500, icon: "💵" },
    { title: "Total Paid ($)", value: 4000, icon: "✅" },
    { title: "Total Pending ($)", value: 500, icon: "⏳" },
    { title: "Low Stock Items", value: 5, icon: "⚠️" },
    { title: "Profit ($)", value: 1800, icon: "💲" },
    { title: "Income Tax ($)", value: 300, icon: "🏛️" },
  ];

  // Mock charts data
  const trendData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue",
        data: [400, 500, 450, 600, 550, 480, 700],
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        tension: 0.3,
      },
      {
        label: "Profit",
        data: [150, 200, 180, 220, 210, 190, 250],
        borderColor: "#4caf50",
        backgroundColor: "#4caf50",
        tension: 0.3,
      },
      {
        label: "Income Tax",
        data: [30, 35, 32, 40, 38, 36, 45],
        borderColor: "#f44336",
        backgroundColor: "#f44336",
        tension: 0.3,
      },
    ],
  };

  const orderTypeData = {
    labels: ["Walk-in", "Pre-order", "Online"],
    datasets: [
      {
        data: [50, 30, 40],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
      },
    ],
  };

  const paymentTypeData = {
    labels: ["Cash", "Mobile Money", "Card"],
    datasets: [
      {
        data: [70, 30, 20],
        backgroundColor: ["#4caf50", "#2196f3", "#f44336"],
      },
    ],
  };

  const topProductsData = {
    labels: ["Croissant", "Cake", "Bread", "Muffin", "Pie"],
    datasets: [
      {
        label: "Units Sold",
        data: [50, 30, 40, 20, 15],
        backgroundColor: [
          "#4caf50",
          "#2196f3",
          "#ff9800",
          "#f44336",
          "#9c27b0",
        ],
      },
    ],
  };

  // Low stock table mock data
  const lowStockItems = [
    { product: "Croissant", stock: 2 },
    { product: "Muffin", stock: 1 },
    { product: "Pie", stock: 0 },
  ];

  return (
    <div className="pro">
      <div className="analytics">
        <h1>Analytics</h1>
        <p>Track and analyze data of any date</p>
        <div className="order-divider"></div>

        {/* Filters */}
        <div className="filters">
          <input type="date" />
          <select>
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <input type="text" placeholder="Search..." />
        </div>

        {/* Summary Cards */}
        <div className="analytics-cards">
          {summary.map((item, index) => (
            <div key={index} className="acard">
              <div
                className="stat-icon"
                style={{ background: item.color + "20" }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="charts">
          <div className="chart-container">
            <h3>Revenue, Profit & Tax Trend</h3>
            <Line data={trendData} />
          </div>
          <div className="chart-container-pie">
            <h3>Order Type Breakdown</h3>
            <Pie data={orderTypeData} />
          </div>
          <div className="chart-container-pie">
            <h3>Payment Type</h3>
            <Pie data={paymentTypeData} />
          </div>
          <div className="chart-container">
            <h3>Top Selling Products</h3>
            <Bar data={topProductsData} />
          </div>
        </div>

        {/* Low Stock Table */}
        <div className="low-stock">
          <h3>Low Stock Alert</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {lowStockItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
