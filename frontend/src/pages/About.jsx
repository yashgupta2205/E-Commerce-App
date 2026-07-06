import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US '} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col gap-6 md:w-2/4 text-gray-600 justify-center'>
          <p>Welcome to KLiq, your one-stop destination for quality products delivered with care. We believe shopping should be simple, enjoyable, and trustworthy. Our team is passionate about curating a wide range of items that bring value and satisfaction to our customers.</p>
          <p>At KLiq, we focus on customer happiness, reliable service, and a seamless online shopping experience. From browsing to checkout, we aim to make every step smooth and secure.</p>
          <p>This is just the beginning of our journey, and we’re excited to grow with you. Thank you for choosing us—we’re here to make your shopping experience better every day.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At KLiq, our mission is to simplify online shopping by providing high-quality products, exceptional service, and a smooth digital experience. We strive to build trust with our customers and make every purchase a step towards convenience and satisfaction.</p>
        </div>  
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
