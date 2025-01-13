'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules'
const titleStyle = 'text-[36px] text-[#fff] font-semibolt text-center pt-[300px] sm:text-[20px] sm:pt-[170px] md:text-[26px] md:pt-[150px] lg:text-[36px] lg:pt-[200px] xl:pt-[300px]'
const textStyle = 'text-[18px] text-[#FDFDFD] font-normal text-center pb-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px]'

export default function App() {
  return (
    <>
      <section className='bg-[#365665] overflow-hidden'>
        <div className='container'>
          <div className='wrapper pb-[80px]'>
            <h2 className="main_title text-[40px] text-[#fff] font-bold text-start py-[55px] translate-x-[100px] sm:translate-x-0 sm:text-[22px] sm:py-[35px] md:text-[30px] md:translate-x-[100px] lg:text-[40px] lg:py-[45px] xl:py-[55px]">OUR TEAM</h2>
            <div className='team_swiper relative ' data-swiper-autoplay='2500'>
              <Swiper
                slidesPerView={4.3}
                spaceBetween={20}
                autoplay={{
                  delay: 1800, // Delay in milliseconds
                  disableOnInteraction: false // Continue autoplay after user interaction
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.5,
                  },
                  380: {
                    slidesPerView: 2.5,
                  },
                  620: {
                    slidesPerView: 3.5,
                  },
                  900: {
                    slidesPerView: 4.5,
                  }

                }}
                loop={true}
                // pagination={{
                //   clickable: true
                // }}
                // navigation={true}
                modules={[Autoplay]}
                className='mySwiper absolute left-[100px] sm:left-0 md:left-[100px]'
              >
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
                <SwiperSlide className='team_img rounded-[10px]'>
                  <h6 className={titleStyle}>Lorem Ipsum</h6>
                  <p className={textStyle}>Lorem Ipsum is simply dummy</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
