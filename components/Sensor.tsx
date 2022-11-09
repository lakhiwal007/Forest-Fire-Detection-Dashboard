import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Gauge from "./Gauge";

type SensorProp = {
  sensor: string;
  data: number;
  prevData: number;
};
export default function Sensors({ sensor, data, prevData }: SensorProp) {
  return (
    <div className="sensorBox">
      <div className="w-full relative">
        <p className="text-slate-700 text-3xl md:text-5xl text-right">
          {sensor}
        </p>
        <Gauge
          value={data}
          // any other options you want
        />
        <p className="text-5xl md:text-8xl mb-4">{data}</p>
        <p className="text-gray-400 text-3xl md:text-5xl flex items-center ml-8 ">
          {prevData}{" "}
          {data - prevData === 0 ? (
            <span className="text-5xl pl-4 text-slate-500">--</span>
          ) : data - prevData > 0 ? (
            <span className="text-3xl pl-4 text-red-500">
              <AiOutlineArrowUp />
            </span>
          ) : (
            <span className="text-3xl pl-4 text-green-500">
              <AiOutlineArrowDown />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
