// app/dashboard/page.tsx (or pages/dashboard.tsx if using pages router)
"use client";
import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">E-commerce Dashboard</h1>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-sm font-medium text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">$48,920</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-sm font-medium text-gray-500">Orders</h2>
          <p className="text-2xl font-bold text-blue-600 mt-2">1,250</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-sm font-medium text-gray-500">Customers</h2>
          <p className="text-2xl font-bold text-purple-600 mt-2">820</p>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Products</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-4 flex justify-between">
            <span className="text-gray-700">Smartphone X</span>
            <span className="text-gray-900 font-semibold">$1,200</span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-gray-700">Bluetooth Headphones</span>
            <span className="text-gray-900 font-semibold">$860</span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-gray-700">Gaming Laptop</span>
            <span className="text-gray-900 font-semibold">$3,500</span>
          </li>
        </ul>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Orders</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-600 border-b">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-gray-700 border-b">
              <td className="py-2">#A101</td>
              <td className="py-2">John Doe</td>
              <td className="py-2">$200</td>
              <td className="py-2 text-green-600 font-medium">Completed</td>
            </tr>
            <tr className="text-sm text-gray-700 border-b">
              <td className="py-2">#A102</td>
              <td className="py-2">Jane Smith</td>
              <td className="py-2">$150</td>
              <td className="py-2 text-yellow-500 font-medium">Pending</td>
            </tr>
            <tr className="text-sm text-gray-700 border-b">
              <td className="py-2">#A103</td>
              <td className="py-2">Alex Johnson</td>
              <td className="py-2">$320</td>
              <td className="py-2 text-red-500 font-medium">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
