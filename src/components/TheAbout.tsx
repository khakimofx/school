import React from 'react'
import Image from 'next/image'
import RightImg from '@/public/Container.png'
const TheAbout = () => {
  return (
    <section className='w-full about'>
      <div className='container'>
        <div className='about_wrapper flex items-center justify-between gap-[145px] pt-[250px] pb-[150px] sm:flex flex-col-reverse justify-center items-center sm:pt-[100px] pb-[70px] sm:gap-[50px] md:flex-row items-center justify-between  md:pt-[150px] md:pb-[50px] lg:gap-[100px] lg:pt-[200px] lg:pb-[100px] xl:pt-[250px] xl:pb-[150px]'>
          <div className='left_about w-[45%] sm:flex flex-col justify-center items-start sm:w-[90%] md:flex-none md:w-[45%]'>
            <h3 className='title text-start text-[32px] text-[#FFBF5A] font-semibold sm:text-[18px]  lg:text-[26px] xl:text-[32px]'>
              Corradini Catholic School
            </h3>
            <p className='about_text text-[20px] font-bold text-[#fff] sm:text-[12px] lg:text-[18px] xl:text-[20px]'>
              Corradini Catholic School started offering the 8:4:4 System of
              Education (Eight years in primary school, four in secondary school
              and four in University) in the year 2006. The first candidates did
              their KCPE (Kenya Certificate of Primary Education) exam in 2013.
              We continued offering this System of Education until last year
              when the Government of Kenya decided we shift to 6:3:3:3 (Six
              years primary, three in Junior School, three in senior school and
              three in University) System of Education for all grades and
              levels.
            </p>
            <a
              href='#!'
              className='link text-[#fff] text-[20px] py-[10px] px-[40px] bg-[#FFBF5A] rounded-[24px] mt-9 sm:text-[14px] sm:py-[8px] px-[25px] sm:mt-5 md:text-[16px] md:text-start lg:text-[18px] xl:text-[20px]'
            >
              Contact us
            </a>
          </div>
          <div className='right_about'>
            <Image src={RightImg} alt='main foto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheAbout
