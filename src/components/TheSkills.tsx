import React from 'react'
import TheSkillsComp from '@/components/TheSkillsComp'
import { skillsComp } from '@/utility'
import Image from 'next/image'
const TextStyle =
  ' absolute bottom-0 text-[#fff] text-[24px] font-extrabold px-[44px] pt-[400px] pb-[100px] lg:px-[24px] lg:pt-[250px] lg:text-[18px] xl:text-[24px] xl:pt-[350px] xl:px-[34px] 3xl:text-[24px] 3xl:px-[44px] 3xl:pt-[400px] 3xl:pb-[100px]'

const TheSkills: React.FC = () => {
  return (
    <section className='skills bg-[#365665]'>
      <h2 className='text-center pb-8 text-[#fff] text-[32px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] '>
        The Basic Skills you will Learn
      </h2>
      <div className="hidden_swiper hidden max-lg:block">
        <TheSkillsComp />
      </div>
      <div className='wrapper flex justify-between items-center flex-wrap max-lg:hidden'>
        {skillsComp && skillsComp.map((skill) => (<div key={skill.id} className='relative w-[20%]'>
          <Image src={skill.img} alt={skill.text} objectFit="cover" />
          <p className={TextStyle}>{skill.text}</p>
        </div>))}
      </div>
    </section>
  )
}

export default TheSkills
