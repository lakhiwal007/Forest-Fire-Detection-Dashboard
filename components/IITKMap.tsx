import React from "react";
import { ImLocation2 } from "react-icons/im";

export default function IITKMap() {
  return (
    <div className="w-full min-h-[50vh] p-4 flex items-center justify-center relative">
      <div className="w-[80%] min-h-[30vh] flex items-center justify-center border-4 border-green-700 rounded-lg relative">
        <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-red-600 bg-black absolute -top-4 -left-4">
          <p className="text-5xl text-red-600 absolute -top-8">
            <ImLocation2 />
          </p>
        </div>
        <div className="absolute pl-2 pr-2 top-4 -left-8 backdrop-blur-sm rounded-lg border-[1px] border-slate-300">
          <p>Sensor 1</p>
          <p>PK Kelkar Library</p>
        </div>

        <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-amber-400 bg-black absolute -top-4 -right-4">
          <p className="text-5xl text-amber-400 absolute -top-8">
            <ImLocation2 />
          </p>
        </div>
        <div className="absolute pl-2 pr-2 top-4 -right-8 backdrop-blur-sm rounded-lg border-[1px] border-slate-300">
          <p>Sensor 2</p>
          <p>Old SAC Complex</p>
        </div>
        <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-teal-400 bg-black absolute -bottom-4 -left-4">
          <p className="text-5xl text-teal-400 absolute -top-8 z-10">
            <ImLocation2 />
          </p>
        </div>
        <div className="absolute pl-2 pr-2 bottom-12 -left-8 backdrop-blur-sm rounded-lg border-[1px] border-slate-300">
          <p>Sensor 3</p>
          <p>New Core Labs</p>
        </div>

        <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-fuchsia-700 bg-black absolute -bottom-4 -right-4">
          <p className="text-5xl text-fuchsia-800 absolute -top-8 z-10">
            <ImLocation2 />
          </p>
        </div>
        <div className="absolute pl-2 pr-2 bottom-12 -right-8 backdrop-blur-sm rounded-lg border-[1px] border-slate-300">
          <p>Sensor 4</p>
          <p>Flight Laboratory</p>
        </div>
      </div>
    </div>

    // <div className="w-full flex items-center justify-center p-8">
    //   <div className="sensorContainer">
    //     <div className="connectorLines"></div>
    //     <div className="sensorBoxMap">
    //       <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-red-600 bg-black absolute -top-3 -left-4">
    //         <p className="text-5xl text-red-600 absolute -top-7">
    //           <ImLocation2 />
    //         </p>
    //       </div>
    //       <div className="w-[200px] h-[300px] absolute top-6 -left-8">
    //         <p>Sensor 1</p>
    //         <p>PK Kelkar Library</p>
    //       </div>
    //     </div>

    //     <div className="sensorBoxMap">
    //       <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-amber-400 bg-black absolute -top-3 -right-4">
    //         <p className="text-5xl text-amber-400 absolute -top-7">
    //           <ImLocation2 />
    //         </p>
    //       </div>
    //       <div className="w-[200px] h-[300px] absolute top-6 -right-20">
    //         <p>Sensor 2</p>
    //         <p>Outreach Auditorium</p>
    //       </div>
    //     </div>

    //     <div className="sensorBoxMap">
    //       <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-teal-400 bg-black absolute -bottom-3 -left-4">
    //         <p className="text-5xl text-teal-400 absolute -top-7">
    //           <ImLocation2 />
    //         </p>
    //       </div>
    //       <div className="w-[200px] h-[300px] absolute top-20 left-10">
    //         <p>Sensor 3</p>
    //         <p>New Core Labs</p>
    //       </div>
    //     </div>

    //     <div className="sensorBoxMap">
    //       <div className="w-[30px] h-[30px] flex items-center justify-center  rounded-full border-4 border-fuchsia-700 bg-black absolute -bottom-3 -right-4">
    //         <p className="text-5xl text-fuchsia-800 absolute -top-7">
    //           <ImLocation2 />
    //         </p>
    //       </div>
    //       <div className="w-[200px] h-[300px] absolute top-20 -right-10">
    //         <p>Sensor 4</p>
    //         <p>Flight Laboratory</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
