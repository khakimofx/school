'use client'
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { skillsComp } from "@/utility";
import Image from "next/image";
const TextStyle =
    ' absolute bottom-0 text-[#fff] text-[24px] font-extrabold px-[44px] pt-[400px] pb-[100px] sm:text-[14px] sm:pt-[200px] sm:pb-[60px] md:text-[16px] md:pt-[250px] pb-[90px] lg:text-[18px] lg:pt-[280px] lg:pb-[100px]'

export default function App() {
    return (
        <>
            <Swiper className="mySwiper sm:w-[90%] md:w-[100%]" slidesPerView={1.3}
                spaceBetween={20}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true
                }}
                breakpoints={{
                    580: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    }
                }}

                loop={true}
                modules={[Autoplay]}>
                {skillsComp && skillsComp.map((skill) => (<SwiperSlide key={skill.id} className="w-[20%] h-[150px]">
                    <div className='relative w-[100%] h-[30vh]'>
                        <Image src={skill.img} alt="skill" className='w-[100%] h-full' objectFit="cover" layout="fill"/>
                        <p className={TextStyle}>Communication and cooperation</p>
                    </div>
                </SwiperSlide>
                ))}

            </Swiper >
        </>
    );
}
