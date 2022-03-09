import { warningTablos } from "./Data";
import React from "react";
import Tablo from "./Tablo";
import "./Tablos.css";
export default function Tablos() {
  return (
    <div className="Tablos">
      <div className="warning">
        <h2>تابلوهای هشدار دهنده یا انتظامی</h2>
      </div>
      <div className="container">
        {warningTablos.map((i) => (
          <Tablo key={i.id} src={i.src} p={i.p} />
        ))}
      </div>
    </div>
  );
}
