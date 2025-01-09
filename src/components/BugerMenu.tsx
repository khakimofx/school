'use client'
import { SearchOutlined } from '@ant-design/icons'
import { MenuOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useState } from 'react';

const ListStyle =
  'text-[18px] text-[#fff] cursor-pointer bg-transparent px-[23px] py-[12px] hover:bg-[#fff] hover:text-[#000] rounded-[15px] duration-500 sm:text-[14px]'
  ;
interface BurgerMenuProps {

  className?: string;

}

const BurgerMenu: React.FC<BurgerMenuProps> = (className) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleClose = () => {
    setIsOpen(!isOpen)
    if (typeof document !== 'undefined') {
      document.querySelector('body')?.classList.toggle('overflow-hidden')
    }
  }
  const listAction = () => {
    setIsOpen(!isOpen)
    if (typeof document !== 'undefined') {
      document.querySelector('body')?.classList.remove('overflow-hidden')
    }
  }

  return (
    <>
      <div className={`burger_icon flex max-md:block hidden justify-end items-center ${className} ${isOpen ? 'active' : ''} transition-all ease-in duration-300`}>
        <button onClick={() => toggleClose()} className=' absolute top-5  right-6  z-20'>
          <MenuOutlined className=' text-[30px] text-[#e1a84d] font-extrabold'
          />
        </button>
      </div>
      {isOpen && (
        <div className='burger_box max-md:block hidden absolute z-10 w-full top-0 h-[70vh] transition-all ease-in duration-500'>
          <div className='container flex flex-col-reverse items-center justify-center pt-5'>
            <ul className='menu flex flex-col justify-center items-center'>
              <li className={ListStyle} onClick={() => listAction()}><Link href='#solutions'>Home</Link></li>
              <li className={ListStyle} onClick={() => listAction()}><Link href='#solutions'>Academics</Link></li>
              <li className={ListStyle} onClick={() => listAction()}><Link href='#solutions'>News</Link></li>
              <li className={ListStyle} onClick={() => listAction()}><Link href='#solutions'>About Us</Link></li>
              <li className={ListStyle} onClick={() => listAction()}><Link href='#solutions'>Contact Us</Link></li>
            </ul>
            <div className='search_box relative'>
              <input
                type='search'
                className='inp bg-[#1C1C1C] text-[#fff] pl-[16px] py-[19px] rounded-[28px] sm:py-[10px] pr-6'
                placeholder='search'
              />
              <SearchOutlined className='absolute top-5 right-4 text-[#fff] text-[24px] sm:text-[16px] sm:top-4' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BurgerMenu
