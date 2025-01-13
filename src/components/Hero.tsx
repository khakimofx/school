import book1 from '@/public/book1.svg'
import book2 from '@/public/book2.svg'
import Vector from '@/public/Vector.svg'
import Image from 'next/image'
import React from 'react'
const TextStyle =
  'text-[#fff] text-center text-[24px] sm:text-[14px] lg:text-[18px]'
const ImgStyle = 'sm:w-[30%] md:w-[45%] lg:w-[100%] '

const Hero = () => {
  return (
    <section className='main' id='main'>
      <div className='container'>
        <div className='wrapper relative flex justify-center items-center flex-col'>
          <h1 className='title text-[60px] font-extrabold text-[#fff] w-[61%] text-center sm:text-[25px] w-[90%] md:text-[32px] md:w-[75%] lg:text-[40px] lg:w-[65%] xl:text-[60px] xl:w-[61%]'>
            <span className='edu text-[#FFBF5A]'>Education </span>
            <span className='key'>is the best key</span> success in life
          </h1>
          <p className='text w-[83%] text-center text-[#fff] text-[32px] font-[700] sm:text-[14px] md:text-[20px] lg:text-[26px] xl:text-[32px]'>
            Unlock your full potential with our comprehensive education programa
            designed to empower you for success in life.
          </p>
          <a
            href='#!'
            className='link text-[#fff] mt-[40px] text[24px] font-[700] px-[50px] py-[20px] rounded-[24px] bg-[#FFBF5A] duration-500 hover:bg-transparent sm:text-[12px] mt-[20px] px-[20px] py-[9px] md:text-[14px] lg:text-[18px] xl:text-[24px]'
          >
            Join Now
          </a>
          <div
            className='box w-[60%] bg-[#191919] flex items-center flex-col rounded-[40px] 
          border-[5px] border-solid border-[#fff] translate-y-[75px] sm:w-[90%] sm:translate-y-[60px] lg:translate-y-[150px] xl:w-[60%]'
          >
            <h2 className='box_title pt-[40px] pb-[24px] text-[32px] text-[#fff] sm:text-[12px] sm:pt-[15px] sm:pb-[8px] lg:pt-[30px] lg:pb-[14px] lg:text-[20px] xl:pt-[40px] xl:pb-[24px] xl:text-[32px]'>
              CORRADINI School <span>Learn for</span>
            </h2>
            <div className=' w-full images flex justify-around items-center pb-[40px] sm:pb-[15px] lg:pb-[40px]'>
              <div className='left flex flex-col justify-center items-center'>
                <Image alt='foto' src={book1} className={ImgStyle} />
                <p className={TextStyle}>learning</p>
              </div>
              <div className='center flex flex-col justify-center items-center'>
                <Image alt='foto' src={book2} className={ImgStyle} />
                <p className={TextStyle}>literacy</p>
              </div>
              <div className='right flex flex-col justify-center items-center'>
                <Image alt='foto' src={Vector} className={ImgStyle} />
                <p className={TextStyle}>self-efficacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
