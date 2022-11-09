import React from "react";

interface dataProps {
  data: Array<number>;
}

export default function DataTable({ data }: dataProps) {
  const dataCpy = [...data];
  const dataTable = [];
  while (dataCpy.length > 0) {
    dataTable.push(dataCpy.splice(0, 4));
  }

  return (
    <div className="w-full max-h-[45vh] overflow-y-scroll scrollbar-hide border-[1px] border-gray-800 rounded-md">
      <table className="w-full text-center">
        <thead className="sticky top-0 bg-gray-900 rounded font-bold text-md md:text-xl">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Sensor1</th>
            <th scope="col">Sensor2</th>
            <th scope="col">Sensor3</th>
            <th scope="col">Sensor4</th>
          </tr>
        </thead>

        <tbody>
          {dataTable.slice(1, dataTable.length).map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
