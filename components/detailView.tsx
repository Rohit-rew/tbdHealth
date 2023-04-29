import React from 'react'

export default function DetailView() {
  return (
    <div className="w-3/5 bg-white rounded-2xl shadow-2xl p-8 mb-7 flex flex-col justify-between gap-8 relative overflow-hidden">

        <div className='flex items-center gap-3 z-20'>
            <h2 className="text-2xl font-custom font-bold">Basic Information</h2>
            <div className='h-4 w-0.5 border border-gray-300'></div>
            <p>#TBD108268</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-y-7 gap-x-3 z-20">
            <div className="grid grid-cols-2">
                <p className='text-gray-400 text-sm font-semibold'>Test type</p>
                <p className='text-black text-sm font-bold'>3 Panel STD</p>
            </div>
            <div className="grid grid-cols-2">
                <p className='text-gray-400 text-sm font-semibold'>Date of birth</p>
                <p className='text-black text-sm font-bold'>10/11/2000</p>
            </div>
            <div className="grid grid-cols-2">
                <p className='text-gray-400 text-sm font-semibold'>Patient name</p>
                <p className='text-black text-sm font-bold'>John Carter</p>
            </div>
            <div className="grid grid-cols-2">
            <p className='text-gray-400 text-sm font-semibold'>Gender</p>
                <p className='text-black text-sm font-bold'>Male</p>
            </div>
            <div className= "grid grid-cols-2">
                <p className='text-gray-400 text-sm font-semibold'>Provider</p>
                <p className='text-black text-sm font-bold'>N/A</p>
            </div>
        </div>

        

        <div className='w-full rounded-2xl bg-yellow-50 flex flex-col py-5 px-10 z-20 h-36'>
            <h2 className='font-custom font-semibold text-sm'>Sample and Report Details</h2>

            <div>
                
            </div>



        </div>

        <div className="flex self-end gap-4 z-20">

          <button className="text-green-700 underline underline-offset-4 text-xs font-bold">NO, LATER</button>
          <button className="bg-green-700 rounded-full text-white px-20 py-4 text-xs font-semibold">PROCEED TO VIEW REPORT</button>

        </div>

        <img src='/globe.png'  className='absolute -left-20 -bottom-20 z-10 rotate-custom opacity-20' width={330} height={330}/>

    </div>
  )
}

// <div className='w-full flex gap-14'>
//             <div className='flex flex-col w-1/2 gap-6'>
//                 <div className='flex justify-between'>
//                     <p className='text-gray-400 text-sm font-semibold'>Test type</p>
//                     <p className='text-black text-sm font-bold'>3 Panel STD</p>
//                 </div>
//                 <div className='flex justify-between'>
//                     <p className='text-gray-400 text-sm font-semibold'>Patient Name</p>
//                     <p className='text-black text-sm font-bold'>John Carter</p>
//                 </div>
//                 <div className='flex justify-between'>
//                     <p className='text-gray-400 text-sm font-semibold'>Provider</p>
//                     <p className='text-black text-sm font-bold'>N/A</p>
//                 </div>
//             </div>
//             <div className='flex flex-col w-1/2 gap-6'>
//                  <div className='flex justify-between'>
//                     <p className='text-gray-400 text-sm font-semibold'>DOB</p>
//                     <p className='text-black text-sm font-bold'>01/05/2000</p>
//                 </div>
//                 <div className='flex justify-between'>
//                     <p className='text-gray-400 text-sm font-semibold'>Gender</p>
//                     <p className='text-black text-sm font-bold'>Male</p>
//                 </div>

//             </div>
//         </div>
