import React, { useState } from "react";

const BACKEND_URL = "http://localhost:4000";

function App() {
  const [form, setForm] = useState({ name: "", location: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch business data");
      }
      const json = await res.json();
      setData({ ...form, ...json });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    setError("");
    setLoading(true);
    try {
      const params = new URLSearchParams(form).toString();
      const res = await fetch(`${BACKEND_URL}/regenerate-headline?${params}`);
      if (!res.ok) {
        throw new Error("Failed to regenerate headline");
      }
      const { headline } = await res.json();
      setData((d) => ({ ...d, headline }));
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-2">
      <h1 className="text-2xl font-bold mb-6">Mini Local Business Dashboard</h1>
      <form
        className="w-full max-w-md bg-white rounded-lg shadow p-6 mb-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1">Business Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            disabled={loading}
            placeholder="e.g. Cake & Co"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
            disabled={loading}
            placeholder="e.g. Mumbai"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        {error && <div className="text-red-500 mt-3">{error}</div>}
      </form>

      {data && (
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-3xl font-bold">{data.rating}</span>
            <span className="text-yellow-500 text-2xl">★</span>
          </div>
          <div className="mb-2 text-gray-600">{data.reviews} Reviews</div>
          <div className="text-center italic font-medium mb-4">{data.headline}</div>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition disabled:opacity-60"
            onClick={regenerateHeadline}
            disabled={loading}
          >
            {loading ? "Regenerating..." : "Regenerate SEO Headline"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;