"use client";

import React, { useEffect } from "react";

export default function FilterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Помилка фільтрації:", error);
  }, [error]);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ff4d4f",
        borderRadius: "8px",
        backgroundColor: "#fff2f0",
      }}
    >
      <h2 style={{ color: "#ff4d4f" }}>Щось пішло не так!</h2>
      <p>Помилка: {error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Спробувати знову
      </button>
    </div>
  );
}
