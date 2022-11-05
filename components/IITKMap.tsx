import React from "react";

export default function IITKMap() {
  return (
    <div className="w-full p-4 ">
      <iframe
        width={"100%"}
        height="550"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.openstreetmap.org/export/embed.html?bbox=80.21030187606813%2C26.50322219671934%2C80.2461361885071%2C26.52096409326829&amp;layer=mapnik"
        style={{ border: "1px solid black", borderRadius: "10px" }}
      ></iframe>
    </div>
  );
}
