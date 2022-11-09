import React, { useState } from "react";
import Sensor from "./Sensor";

interface dataProps {
  data: Array<number>;
}

export default function Sensors({ data }: dataProps) {
  return (
    <div className="w-full h-auto p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <Sensor sensor="Sensor 1" data={data[0]} prevData={4} />
      <Sensor sensor="Sensor 2" data={data[1]} prevData={4} />
      <Sensor sensor="Sensor 3" data={data[2]} prevData={4} />
      <Sensor sensor="Sensor 4" data={data[3]} prevData={4} />
    </div>
  );
}
