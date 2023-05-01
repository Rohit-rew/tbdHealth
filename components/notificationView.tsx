import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faClose } from "@fortawesome/free-solid-svg-icons";

type propT = {
  closeNotification: React.Dispatch<React.SetStateAction<boolean>>;
  openDetailView : React.Dispatch<React.SetStateAction<boolean>>
};

export default function NotificationView({ closeNotification , openDetailView }: propT) {
  return (
    <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center">
      <div className="w-2/5 max-w-xl h-3/5 bg-white rounded-2xl shadow-2xl p-8 mb-7 flex flex-col justify-between relative">
        <h2 className="text-2xl font-custom font-semibold">
          Hey! Your report is ready to view
        </h2>

        <p className="text-gray-400 text-sm">
          Your report of <b className="text-black">3 Panel STD</b> kit sent of{" "}
          <b className="text-black">11 Feb 2022</b> is ready. Would you like to
          view it now ?
        </p>

        <div className="w-32 h-32 rounded-full bg-gray-300 self-center"></div>

        <div className="flex self-center gap-4">
          <button
            onClick={() => closeNotification(false)}
            className="text-green-700 underline underline-offset-4 text-xs font-bold"
          >
            NO, LATER
          </button>
          <button 
          onClick={()=>openDetailView(true)}
          className="bg-green-700 rounded-full text-white px-20 py-4 text-xs font-semibold">
            VIEW DETAILS
          </button>
        </div>
        <FontAwesomeIcon onClick={()=>closeNotification(false)} icon={faClose} className="absolute top-5 right-5" />
      </div>
    </div>
  );
}
