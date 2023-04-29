import React from 'react'

export default function NotificationView() {
  return (
    <div className="w-2/5 max-w-xl h-3/5 bg-white rounded-2xl shadow-2xl p-8 mb-7 flex flex-col justify-between">
        <h2 className="text-2xl">Hey! Your report is ready to view</h2>

        <p className="text-gray-400 text-sm">Your report of <b className="text-black">3 Panel STD</b> kit sent of <b className="text-black">11 Feb 2022</b> is ready. Would you like to view it now ?</p>

        <div className="w-32 h-32 rounded-full bg-gray-300 self-center">

        </div>

        <div className="flex self-center gap-4">

          <button className="text-green-700 underline underline-offset-4 text-xs font-bold">NO, LATER</button>
          <button className="bg-green-700 rounded-full text-white px-20 py-4 text-xs font-semibold">VIEW DETAILS</button>

        </div>
    </div>
  )
}
