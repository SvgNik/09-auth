import React from "react";

export default function RootLoading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>
        Завантаження NoteHub...
      </p>
    </div>
  );
}
