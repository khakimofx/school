import React from 'react'
import Image from 'next/image'
import Logo from '@/public/footer_img.svg'
import telegram from '@/public/telegram.svg'
import whatsapp from '@/public/whatsapp.svg'
const allTextStyle = 'text-[#fff] sm:text-[12px] md:text-[14px]'
const allTitleStyle = 'text-[#fff] uppercase opacity-[0.4] sm:text-[8px] md:text-[10px]'

const footer = () => {
  return (
    <footer className='bg-[#1C1C1C]'>
      <div className='container'>
        <div className='wrapper flex flex-col justify-center items-center'>
          {/* TOP START */}
          <div className='ft_top bg-[#131E23] w-[70%] pt-[64px] pb-[64px] rounded-br-[24px] rounded-bl-[24px]'>
            <h2 className='title text-[#fff] font-bold text-center sm:text-[16px] md:text-[24px] lg:text-[28px]'>
              Do you have any questions?
            </h2>
            <p className='text text-[#fff] font-bold pt-[10px] pb-[32px] text-center sm:text-[12px] md:text-[14px] lg:text-[16px]'>
              We will provide detailed information about our services, types of
              work, and top projects.
            </p>
            <form className='form flex justify-center items-center relative w-[80%] mx-auto'>
              <input
                type='tel'
                className='ft_inp w-full mb-[64px] text-[#fff]'
                placeholder='+998'
              />
              <button
               className='ft_btn text-[12px] font-semibold text-[#ffff] py-[13px] px-[24px] mr-1 absolute right-0 top-[4px]  bg-[#DB9C3A] rounded-[16px] sm:text-[10px] md:text-[12px]
               '>
                Send request
              </button>
            </form>
          </div>
          {/* TOP END */}
        </div>
        {/* BOTTOM  START*/}
        <div className='bottom  mt-[64px]  pb-[50px] sm:flex flex-wrap md:flex justify-evenly items-center'>
          <div className='left'> 
            <Image src={Logo} alt='footer logo' />
            <div className='info_box gap-y-2 my-[20px]'>
              <p className={allTextStyle}>+1 891 989-11-91</p>
              <p className={allTextStyle}>info@logoipsum.com</p>
            </div>
            <div className='icons flex gap-4 '>
              <Image src={telegram} alt='telegram icon' />
              <Image src={whatsapp} alt='whatsapp icon' />
            </div>
          </div>
          <div className='center'>
            <h6 className={allTitleStyle}>Services</h6>
            <p className={allTextStyle}>Technical Support</p>
            <p className={allTextStyle}>Consulting</p>
            <p className={allTextStyle}>Equipment Installation</p>
            <p className={allTextStyle}>Rental</p>
            <div className='cen_bt mt-[20px]'>
              <a href='#!' className={allTextStyle}>
                About us <span>/</span>
              </a>
              <a href='#!' className={allTextStyle}>
                News <span>/</span>
              </a>
              <a href='#!' className={allTextStyle}>
                Contacts
              </a>
            </div>
          </div>
          <div className='right'>
            <h6 className={allTitleStyle}>Catalog</h6>
            <p className={allTextStyle}>Material Handling</p>
            <p className={allTextStyle}>Power Tools</p>
            <p className={allTextStyle}>Industrial Machinery</p>
          </div>
        </div>
        {/* BOTTOM END */}
      </div>
    </footer>
  )
}
export default footer
