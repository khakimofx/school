import React from 'react'
import Image from 'next/image'
import Student from '@/public/student.png'
import SecondStudent from '@/public/student_girl.png'
import StudentGril from '@/public/student_girl.png'
import Board from '@/public/showsBoard.png'
import Community from '@/public/community.png'
import Tournament from '@/public/tournament.png'
import Couple from '@/public/couple.png'
import Bus from '@/public/bus.png'
const CardBox =
  ' w-[80%] mb-[140px] flex items-center justify-between flex-wrap gap-[20px] sm:mb-[50px] sm:w-full md:mb-[70px] md:w-[90%] lg:mb-[120px] lg:w-[95%] xl:mb-[140px] 3xl:w-[80%] '
const Card_data =
  ' bg-[#292929] rounded-[24px] flex flex-col justify-center items-center w-[300px] sm:w-[130px] md:w-[200px] lg:w-[240px] xl:w-[300px]'
const CardTitle =
  ' px-[100px] pt-[38px] text-[32px] text-[#FFBF5A] font-extrabold sm:text-[14px] sm:pt-[18px] px-[20px] sm:text-[14px] md:text-[18px] md:pt-[20px] px-[40px] lg:text-[24px] xl:text-[32px] 2xl:pt-[38px] px-[100px] '
const CardText =
  'pb-[25px] pt-[20px] text-[24px] text-[#fff] font-semibolt sm:pt-[10px] sm:text-[12px] md:text-[15px]  md:pt-[15px] lg:text-[18px] xl:text-[24px] 2xl:pt-[20px]'
const ImgStyle = 'pt-[30px] sm:w-[35%] xl:w-[45%] 2xl:w-[55%] '

const TheData = () => { 
  return (
    <section className='data bg-[#365665]' id='data'>
      <div className='container'>
        <div className='data_wrapper flex flex-col justify-between items-center'>
          <h2 className='title text-[38px] text-[#fff] font-semibold pt-[112px] pb-[65px] sm:text-[18px] sm:pt-[40px] sm:pb-[25px] md:pt-[55px] md:pb-[45px] md:text-[26px] lg:pt-[80px] lg:pb-[55px]  lg:text-[32px] xl:pt-[112px] xl:pb-[65px] xl:text-[38px] '>
            Corradini Catholic school DATA
          </h2>
          <div className={CardBox}>
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={Student} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={SecondStudent} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={StudentGril} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={Board} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={Community} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={Tournament} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={Couple} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
            {/* CARD START */}
            <div className={Card_data}>
              <Image src={Bus} className={ImgStyle} alt='Student' />
              <h4 className={CardTitle}>379</h4>
              <p className={CardText}>Student</p>
            </div>
            {/* CARD END */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheData
