"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchAgents } from "@/redux/agentSlice";

export default function CatalogPage() {
  const dispatch = useAppDispatch();
  const { agents, loading } = useAppSelector((s) => s.agents);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [pricing, setPricing] = useState("");

  useEffect(() => {
    dispatch(fetchAgents());
  }, [dispatch]);

  const filtered = agents.filter((agent) => {
    const matchSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status.length === 0 || status.includes(agent.status);
    const matchCategory =
      category.length === 0 || category.includes(agent.category);
    const matchPricing = pricing === "" || pricing === agent.pricingModel;
    return matchSearch && matchStatus && matchCategory && matchPricing;
  });

  const toggleFilter = (
    value: string,
    setFn: React.Dispatch<React.SetStateAction<string[]>>,
    current: string[]
  ) => {
    if (current.includes(value)) {
      setFn(current.filter((v) => v !== value));
    } else {
      setFn([...current, value]);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setStatus([]);
    setCategory([]);
    setPricing("");
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Agent Catalog</h1>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search by name or description"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <span className="font-semibold">Status</span>
          {["Active", "Beta", "Archived"].map((s) => (
            <div key={s}>
              <input
                id={s}
                type="checkbox"
                checked={status.includes(s)}
                onChange={() => toggleFilter(s, setStatus, status)}
              />{" "}
              <label htmlFor={s}>{s}</label>
            </div>
          ))}
        </div>
        <div>
          <span className="font-semibold">
            Category
          </span>
          {[
            "Customer Service",
            "Marketing",
            "Development",
            "Operations",
            "Finance",
            "Legal",
          ].map((c) => (
            <div key={c}>
              <input
                id={c}
                type="checkbox"
                checked={category.includes(c)}
                onChange={() => toggleFilter(c, setCategory, category)}
              />{" "}
              <label htmlFor={c}>{c}</label>
            </div>
          ))}
        </div>
        <div>
          <span className="font-semibold">
            Pricing
          </span>
          {["Free Tier", "Subscription", "Per-Use"].map((p) => (
            <div key={p}>
              <input
                id={p}
                type="radio"
                checked={pricing === p}
                name="pricing"
                onChange={() => setPricing(p)}
              />{" "}
              <label htmlFor={p}>{p}</label>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-gray-200 rounded px-4 py-2 mb-4 text-gray-600 hover:bg-gray-600 hover:text-gray-200 transition-colors duration-200 cursor-pointer"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((agent) => (
            <div key={agent.id} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{agent.name}</h2>
              <p className="text-gray-600">{agent.description}</p>
              <p className="text-sm">
                {agent.status} | {agent.category} | {agent.pricingModel}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
