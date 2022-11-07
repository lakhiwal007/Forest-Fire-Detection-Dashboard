import React, { useEffect } from "react";
import Sensor from "./Sensor";
import { GetServerSideProps } from "next";

interface dataProps {
  Data: Array<number>;
}
export default function Sensors({ Data }: dataProps) {
  // let Data:Array<number>;

  return (
    <div className="w-full h-auto p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <Sensor sensor="Sensor 1" data={1} prevData={1} />
      <Sensor sensor="Sensor 2" data={1} prevData={5} />
      <Sensor sensor="Sensor 3" data={1} prevData={4} />
      <Sensor sensor="Sensor 4" data={1} prevData={2} />
    </div>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(
    `http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=4`
  );
  const Data: Array<number> = await res.json();
  console.log(Data);

  // Pass data to the page via props
  return { props: { Data } };
};
