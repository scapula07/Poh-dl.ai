import React from 'react'
import { FaUsersViewfinder } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='w-full flex items-center px-10 py-5 justify-between fixed bg-white'>
          <div className='w-[60%] flex items-center space-x-20 text-sm'> 
              <h5 className='font-semibold poppins-bold text-4xl'>POH-DL<span className=' text-[#a42569] rounded-full'>.</span>ai</h5>
              <div className='flex items-center space-x-10 text-lg poppins-bold'>
                  <h5>How it works</h5>
                  <h5>Features</h5>
                  <h5>Solutions</h5>
                  <h5>Pricing</h5>
              </div>
          </div>
          <div className='flex items-center space-x-8'>
               <h5 className='text-[#a42569] font-semibold '>Log in</h5>
               <button className='border border-[#a42569] py-2.5 px-6 rounded-lg text-[#a42569] font-semibold flex items-center space-x-4'>
                   <FaUsersViewfinder />
                   <span>Get a demo</span>  
               </button>
               <button className='bg-[#a42569] py-2.5 px-6 text-white rounded-lg'>Start a free trial</button>

          </div>
    </div>
  )
}
