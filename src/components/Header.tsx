'use client'
import Image from 'next/image'
import logo from '../public/logo.svg'
import { SearchOutlined } from '@ant-design/icons'
import BurgerMenu from './BugerMenu'
import Link from 'next/link'

const ListStyle =
  'text-[18px] text-[#fff] cursor-pointer bg-transparent px-[23px] py-[12px] hover:bg-[#fff] hover:text-[#000] rounded-[15px] duration-500 md:text-[13px] md:px-[15px] py-[6px] lg:text-[18px] lg:px-[23px] py-[12px]';
export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container head_wrapper flex items-center justify-between h-[70px] '>
        <div className='w-[20%] sm:w-[15%] lg:w-[15%] '>
          <Image src={logo} alt='logo of school' />
        </div>
        <ul className='menu flex items-center justify-between gap-[20px] md:gap-[15px] max-md:hidden'>
          <li className={ListStyle}><Link href='#main'>Home</Link></li>
          <li className={ListStyle}><Link href='#about'>Academics</Link></li>
          <li className={ListStyle}><Link href='#news'>News</Link></li>
          <li className={ListStyle}><Link href='#solutions'>About Us</Link></li>
          <li className={ListStyle}><Link href='#contact us'>Contact Us</Link></li>
        </ul>
        <div className='search_box relative max-md:hidden'>
          <input
            type='search'
            className='inp bg-[#1C1C1C] text-[#fff] pl-[16px] pr-[50px] py-[19px] rounded-[28px] md:pr-0 py-[8px] lg:py-[15px] '
            placeholder='search'
          />
          <SearchOutlined className='absolute top-5 right-4 text-[#fff]  md:text-[18px] md:top-3 lg:text-[20px] xl:text-[24px] ' />
        </div>
      </div>
      <BurgerMenu className='max-md:block hidden' />
    </header>
  )
}
