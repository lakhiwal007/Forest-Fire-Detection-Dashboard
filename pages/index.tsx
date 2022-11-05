import Head from "next/head";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import IITKMap from "../components/IITKMap";
import Sensors from "../components/Sensors";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Forest Fire Detection Dashboard</title>
        <meta name="description" content="Forest Fire Detection Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Sensors />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <IITKMap />
        <DataTable />
      </div>
    </div>
  );
}
