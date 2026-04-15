"use client";

import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function Packages() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await API.get("/packages");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = async (id) => {
    await API.delete(`/packages/${id}`);
    fetchData();
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Packages</h1>

      {data.map((item) => (
        <div key={item._id} className="border p-4 my-2">
          <h2>{item.title}</h2>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}