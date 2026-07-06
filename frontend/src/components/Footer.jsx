import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.Kliq_logo} className='mb-5 w-20' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                KLiq brings you trendy fashion at your fingertips. Shop the latest styles, discover exclusive deals, and express your vibe with ease. Quality, comfort, and style—delivered right to your door. Stay stylish, stay KLiq.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 7357901902</li>
                <li>choudharyrajvil@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>&#169; 2025@ kliq.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
