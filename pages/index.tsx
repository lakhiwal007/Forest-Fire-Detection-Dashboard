import Head from "next/head";
import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import IITKMap from "../components/IITKMap";
import Sensors from "../components/Sensors";

export default function Home() {
  const [data, setData] = useState<number[]>([1, 1, 1, 1]);
  const [prevData, setPrevData] = useState<number[]>([1, 1, 1, 1]);
  // console.log(prevData);
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=4`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
        }

        const Data: Array<number> = await res.json();
        setData(Data);
        setPrevData((prevData) => [...data, ...prevData]);
      } catch (err) {
        console.log(err);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Forest Fire Detection Dashboard</title>
        <meta name="description" content="Forest Fire Detection Dashboard" />
        <link rel="icon" href="/fire.png" />
      </Head>

      <Header />
      <Sensors data={data} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <IITKMap />
        <DataTable data={prevData} />
      </div>
    </div>
  );
}
