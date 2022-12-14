import Head from "next/head";
import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import IITKMap from "../components/IITKMap";
import Loading from "../components/Loading";
import Sensors from "../components/Sensors";

export default function Home() {
  const [data, setData] = useState<number[]>([1, 1, 1, 1]);
  const [pData, setPData] = useState<number[]>([1, 1, 1, 1]);
  const [isLoading, setLoading] = useState(true);
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
        setPData((pData) => [...Data, ...pData]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  if(isLoading) return (<> <Loading/> </>)
  return (
    <div>
      <Head>
        <title>Forest Fire Detection Dashboard</title>
        <meta name="description" content="Forest Fire Detection Dashboard" />
        <link rel="icon" href="/fire.png" />
      </Head>

      <Header />
      <Sensors data={data} pData={pData} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 pl-4 pr-4 pb-4">
        <IITKMap data={data} />
        <DataTable data={pData} />
      </div>
    </div>
  );
}
