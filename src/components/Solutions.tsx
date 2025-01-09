import React from 'react'
import Image from 'next/image'
import rocker from '@/public/rocket.svg'
import lamp from '@/public/lamp.svg'
import backgraund from '@/public/picture.png'
const Text = 'text-[18px] font-normal text-[#fff] sm:text-[12px] lg:text-[14px] xl:text-[18px]'
const Title = 'text-[32px] font-semibold text-[#fff] sm:text-[20px] lg:text-[24px] xl:text-[32px]'

const Solutions = () => {
  return (
    <>
      <section className='solution bg-[#131E23]' id='solutions'>
        <div className='container'>
          <div className='wrapper flex items-center justify-between py-[200px] sm:py-[100px] sm:flex-col md:flex-row lg:py-[150px] xl:py-[200px]'>
            <div className='sol_left w-[45%] sm:w-[100%] md:w-[40%]'>
              <h4 className='title text-[#DB9C3A] font-semibold sm:text-[16px] md:text-[20px] lg:text-[24px]'>
                WHO WE ARE
              </h4>
              <h2 className='main_title text-[#fff] text-[56px] font-bold pt-[38px] pb-[24px] sm:text-[28px] sm:pt-[15px] md:text-[40px] md:pt-[20px] pb-[18px] lg:text-[48px]'>
                We Help To Get Solutions
              </h2>
              <p className='text text-[#fff] text-[24px] font-normal mb-[80px] w-[80%] sm:text-[14px] sm:mb-[40px] md:text-[16px] md:mb-[35px] lg:text-[20px] lg:mb-[60px] '>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,
              </p>
              <div className='left_bt gap-[50px] flex md:gap-[20px] sm:flex-col items-start justify-center lg:gap-[30px] lg:flex-row '>
                <div className='bottom_left flex items-center justify-between gap-[15px] lg:gap-[10px]'>
                  <Image src={rocker} alt='rocker icon' className='sm:w-[15%] md:w-[20%] lg:w-[40%]' />
                  <div className='rocker'>
                    <h5 className={Title}>Lorem Ipsum</h5>
                    <p className={Text}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='bottom_right flex items-center justify-between gap-[15px] xl:gap-[10px]'>
                  <Image src={lamp} alt='lamp icon' className='sm:w-[15%] md:w-[20%] lg:w-[40%]' />
                  <div className='lamp'>
                    <h5 className={Title}>Lorem Ipsum</h5>
                    <p className={Text}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sol_right w-[45%] flex flex-col items-center  sm:w-[100%] sm:mt-10 md:w-[55%] xl:w-[45%]'>
              <Image src={backgraund} alt='backgraund img' />
              <div className='relative flex flex-col items-center justify-center w-full sm:mb-[50px] lg:mb-0'>
                <div className='text_box bg-[#fff] w-[70%] rounded-[20px] absolute bottom-[-110px] flex flex-col items-center text-center'>
                  <p className='
                 text-grey text-[24px] font-normal sm:text-[16px] sm:pt-[22px] md:text-[14px] md:pt-[24px] lg:text-[20px] lg:pt-[34px] xl:text-[24px] xl:pt-[44px]
                 '>Lorem Ipsum is simply dummy</p>
                  <h6 className='
                 text-grey text-[36px] pt-[16px] pb-[12px] font-normal text-center sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px]
                '>Looking for help?</h6>
                  <p className='
                 text-grey text-[20px] font-normal text-center pb-[25px] w-[75%] sm:text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px]
                 '>
                    Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solutions
