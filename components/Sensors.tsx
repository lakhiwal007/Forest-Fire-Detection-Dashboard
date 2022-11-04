import React from "react";

export default function Sensors() {
  return (
    <div className="w-full h-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="sensorBox">Sensor 1</div>
      <div className="sensorBox">Sensor 2</div>
      <div className="sensorBox">Sensor 3</div>
      <div className="sensorBox">Sensor 4</div>
    </div>
  );
}
