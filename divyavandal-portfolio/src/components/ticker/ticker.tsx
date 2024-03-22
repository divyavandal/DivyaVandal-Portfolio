"use client";

import { useEffect } from "react";

export default function Ticker() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const tickerStyle = {
    height: "50px",
    overflow: "hidden",
  };

  return (
    <>
      <div style={tickerStyle}>
        <div className="commonninja_component pid-e145785f-e1f4-4979-9dfb-0de31e87f2e2"></div>
      </div>
    </>
  );
}
