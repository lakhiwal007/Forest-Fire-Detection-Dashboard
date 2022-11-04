import React from "react";

export default function DataTable() {
  return (
    <div className="w-full p-4">
      <table className="w-full table table-dark table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Sensor 1</th>
            <th scope="col">Sensor 2</th>
            <th scope="col">Sensor 3</th>
            <th scope="col">Sensor 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>0</td>
            <td>3</td>
            <td>1</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>3</td>
            <td>1</td>
            <td>7</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2</td>
            <td>6</td>
            <td>5</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
