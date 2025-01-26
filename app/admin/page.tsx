"use client";

import { useState } from "react";
import AdminContent from "./admin_content";

export default function ProjectUploadPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdminCodeSubmit = async () => {
    try {
      const response = await fetch("/api/validate-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminCode }),
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        setIsAuthenticated(true);
        setErrorMessage("");
      } else {
        setErrorMessage(data.message || "Invalid admin code");
      }
    } catch (error) {
      setErrorMessage(
        `An error occurred. Please try again. \n Error: ${error}`
      );
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="bg-white h-max mt-20 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Enter Admin Code</h2>
          <input
            type="password"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
            placeholder="Admin Code"
            className="w-full border rounded-md p-2 mb-4"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
          )}
          <button
            onClick={handleAdminCodeSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Project Upload</h1>
      <p>Welcome, Admin!</p>
      <AdminContent />
    </div>
  );
}
