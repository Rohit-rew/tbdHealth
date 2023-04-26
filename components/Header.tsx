import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { faBell , faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className='flex justify-between pl-20 pr-5 back-color border-b border-gray-300 items-center h-14'>
        <div className='text-4xl font-thin'>
            TBD
        </div>
        <nav className='flex gap-12 w-3/5 h-full items-center pl-14'>
            <button className=' font-medium'>Dashboard</button>
            <button className=' font-medium'>Messages</button>
            <button className='font-medium'>Appointments</button>
            <button className=' font-bold'>History</button>
        </nav>

        <div className='flex items-center h-full py-2  gap-3'>
            {/* <p>O</p> */}
            <FontAwesomeIcon icon={faBell}/>
            <div className='h-full bg-gray-600 w-0.5 border border-gray-600'></div>
            <div className='flex items-center gap-1'>
                <div className='h-6 w-6 rounded-full bg-red-300'></div>
                <p className='text-sm font-semibold'>Hi, John</p>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className='items-end'/>
        </div>
    </header>
  )
}
