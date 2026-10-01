"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("viewCounted") === "yes";

    fetch("/api/views", { method: alreadyCounted ? "GET" : "POST" })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        sessionStorage.setItem("viewCounted", "yes");
      })
      .catch(() => {});
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <p className="mb-3 text-base font-bold text-yellow-300">
      👁 {count.toLocaleString("en-IN")} Visitors
    </p>
  );
}