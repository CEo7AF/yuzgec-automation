// components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <div className="font-nunito" style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#001529", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <p className="text-sm font-bold text-white" style={{ color: "#ffffff" }}>
        Copyright © 2023 CEYAF. All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
