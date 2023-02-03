import { useState } from "react";

export default function Question({ data, text }) {
  const [newQ, setQ] = useState(0);
  const handleSetQ = () => {
    let num = Math.floor(Math.random() * data.length) + 0;
    setQ(num);
  };
  return (
    <div className="App">
      <div style={{ marginTop: "10px" }}>
        <button
          style={{
            fontFamily: "cursive",
            borderRadius: "10px",
            border: "none",
            padding: "0px 10px",
            color: "#fc6c64"
          }}
        >
          <h3>{text}</h3>
        </button>
      </div>
      <p style={{ color: "brown" }}>Click on Question to get new</p>

      <button
        onClick={handleSetQ}
        style={{
          padding: "0.5rem",
          borderRadius: "10px",
          border: "3px solid greenYellow",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        <h2 style={{ color: "darkgoldenrod", fontFamily: "monospace" }}>
          Q.{data[newQ]}
        </h2>
      </button>
    </div>
  );
}
