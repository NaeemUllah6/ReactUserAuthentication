import { useState } from "react";

const Billing = () => {
  const [paymentMethod, setPaymentMethod] = useState({
    cardType: "Visa",
    lastFour: "4242",
    expiry: "12/26",
  });

  const billingHistory = [
    { id: 1, date: "Feb 15, 2024", amount: "$49.99", status: "Paid" },
    { id: 2, date: "Jan 15, 2024", amount: "$49.99", status: "Paid" },
    { id: 3, date: "Dec 15, 2023", amount: "$49.99", status: "Paid" },
  ];

  return (
    <div className=" mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Billing & Subscription</h2>

      {/* Current Plan */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Current Plan: <span className="text-blue-600">Pro Plan</span></h3>
        <p className="text-gray-600">Next payment: <span className="font-semibold">$49.99</span> on March 15, 2024</p>
        <p className="text-gray-600">Billing cycle: Monthly</p>
      </div>

      {/* Payment Method */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <p className="text-gray-600">{paymentMethod.cardType} ending in {paymentMethod.lastFour} (Exp: {paymentMethod.expiry})</p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Update Payment Method
        </button>
      </div>

      {/* Billing History */}
      <div className="mb-6 p-4 border rounded-lg">
        <h3 className="text-lg font-semibold">Billing History</h3>
        <table className="w-full mt-3 border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Date</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-2">{item.date}</td>
                <td className="border p-2">{item.amount}</td>
                <td className="border p-2 text-green-600">{item.status}</td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cancel Subscription */}
      <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
        Cancel Subscription
      </button>
    </div>
  );
};

export default Billing;
