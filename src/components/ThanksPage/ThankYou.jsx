import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
        <p className="text-lg mt-2">Your message has been sent successfully.</p>
        <p className="text-sm text-gray-500">I will get back to you soon.</p>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
