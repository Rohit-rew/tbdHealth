import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCheckCircle, faClose } from "@fortawesome/free-solid-svg-icons";

type propT = {
  closeDetailView : React.Dispatch<React.SetStateAction<boolean>>
  openReportView : React.Dispatch<React.SetStateAction<boolean>>
};

export default function DetailView({closeDetailView , openReportView} : propT) {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center select-none">
      <div className="w-3/5 bg-white rounded-2xl shadow-2xl p-8 mb-7 flex flex-col justify-between gap-8 relative overflow-hidden min-h-max">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-custom font-bold">Basic Information</h2>
          <div className="h-4 w-0.5 border border-gray-300"></div>
          <p>#TBD108268</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-y-7 gap-x-3 ">
          <div className="grid grid-cols-2">
            <p className="text-gray-400 text-sm font-semibold">Test type</p>
            <p className="text-black text-sm font-bold">3-Panel STD</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-gray-400 text-sm font-semibold">Date of birth</p>
            <p className="text-black text-sm font-bold">10/11/1996</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-gray-400 text-sm font-semibold">Patient name</p>
            <p className="text-black text-sm font-bold">John Carter</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-gray-400 text-sm font-semibold">Gender</p>
            <p className="text-black text-sm font-bold">Male</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-gray-400 text-sm font-semibold">Provider</p>
            <p className="text-black text-sm font-bold">N/A</p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-yellow-50 flex flex-col py-5 px-10">
          <h2 className="font-custom font-semibold text-base">
            Sample and Report Details
          </h2>

          <div className="flex justify-center items-center h-14 w-full">
            <div className="bg-black w-10/12 border border-black relative">

              <FontAwesomeIcon className="text-green-600 absolute -left-4 -top-4 bg-white" size="2x" icon={faCheckCircle}/>
              <FontAwesomeIcon className="text-green-600 absolute self-center left-2/4 bg-white -top-4" size="2x" icon={faCheckCircle}/>
              <FontAwesomeIcon className="text-green-600 absolute -right-4 -top-4 bg-white" size="2x" icon={faCheckCircle}/>

            </div>
          </div>

          <div className="w-full flex justify-between 0">

            <div className="flex flex-col items-center">
              <p className="font-bold text-sm">Collection Details</p>
              <p className="font-normal text-sm">01/02/23</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-sm">Received Details</p>
              <p className="font-normal text-sm">01/02/23</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-sm">Report Details</p>
              <p className="font-normal text-sm" >01/02/23</p>
            </div>

          </div>
        </div>

        <div className="flex self-end gap-4">
          <button 
          onClick={()=>closeDetailView(false)}
          className="text-green-700 underline underline-offset-4 text-xs font-bold">
            NO, LATER
          </button>
          <button 
          onClick={()=>openReportView(true)}
          className="bg-green-700 rounded-full text-white px-20 py-4 text-xs font-semibold">
            PROCEED TO VIEW REPORT
          </button>
        </div>
{/* 
        <img
          src="/globe.png"
          className="absolute -left-20 -bottom-20 rotate-custom opacity-20"
          width={330}
          height={330}
        /> */}

        <FontAwesomeIcon 
        onClick={()=>closeDetailView(false)}
        icon={faClose} className="absolute top-5 right-5" />
      </div>
    </div>
  );
}


