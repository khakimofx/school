'use client'

import { sendMessage } from "@/utility/sendMessage"
import { FormEvent } from "react"

const Input =
  ' w-[100%] py-[12px] pl-[10px] border-[1px] border-solid border-[#9498a2] rounded-[8px] sm:pr-[50px]'

const Form: React.FC = () => {

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const userName = form.elements[0] as HTMLInputElement
    const email = form.elements[1] as HTMLInputElement
    const phoneNum = form.elements[2] as HTMLInputElement
    const subject = form.elements[3] as HTMLInputElement
    const message = form.elements[4] as HTMLInputElement

    const template = `userName: ${userName.value}\n email: ${email.value}\n phoneNum: ${phoneNum.value}\n subject: ${subject.value}\n message: ${message.value}\n
    `

    sendMessage(template)

    userName.value = '';
    email.value = '';
    phoneNum.value = '';
    subject.value = '';
    message.value = '';
  }

  return (


    <section id="contact us">
      <div className='container'>
        <div className='wrapper w-[65%] my-20 flex flex-col justify-center items-center mx-auto'>
          <h2 className='text-center text-[#161c2d] sm:text-[22px] md:text-[28px] lg:text-[40px]'>Contact us</h2>
          <p className=' text-[#161c2d] opacity-55 text-center sm:text-[14px] sm:w-full md:text-[16px] md:w-[70%] lg:w-[55%] lg:text-[20px]'>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <form className='flex flex-col items-center justify-center w-full gap-[55px] sm:gap-4' onSubmit={(e) => submitForm(e)}>
            <div className='top gap-2 flex justify-between items-center w-full sm:flex-col sm:pt-8 pb-5 md:flex-row justify-between md:pt-8 md:pb-7 lg:pt-[90px] lg:pb-8'>
              {/* INPUT */}
              <div className="flex flex-col sm:w-full md:w-[48%]">
                <label htmlFor='userName'>First & Last Name</label>
                <input
                  type='text'
                  placeholder='i.e. John Doe'
                  id='userName'
                  name='UserName'
                  className={Input}
                  required
                />
              </div>
              {/* INPUT END */}
              {/* INPUT */}
              <div className="flex flex-col sm:w-full md:w-[48%]">
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  placeholder='i.e. john@mail.com'
                  id='email'
                  name='Email'
                  className={Input}
                  required
                />
              </div>
              {/* INPUT END */}
            </div>
            <div className='center gap-2 flex justify-between items-center w-full sm:flex-col md:flex-row'>
              {/* INPUT */}
              <div className="flex flex-col sm:w-full md:w-[48%]">
                <label htmlFor='phoneNum'>Phone number</label>
                <input
                  type='tel'
                  placeholder='i.e. +1-234-567-7890'
                  id='phoneNum'
                  name='PhoneNum'
                  className={Input}
                  required
                />
              </div>
              {/* INPUT END */}
              {/* INPUT */}
              <div className="flex flex-col sm:w-full md:w-[48%]">
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  placeholder='i.e. I need a help'
                  id='subject'
                  name='Subject'
                  className={Input}
                />
              </div>
              {/* INPUT END */}
            </div>
            <div className='bottom w-full pt-[35px]'>
              <div className="flex flex-col w-full">
                <label htmlFor='message'>Message</label>
                <textarea
                  name='Message'
                  id='message'
                  placeholder='Type you message'
                  className='py-[12px] pl-[10px] border-[1px] border-solid border-[#9498a2] rounded-[8px] w-full'
                ></textarea>
              </div>
            </div>
            <button className='text-[#fff] text-[20px] font-bold px-[95px] py-[10px] mt-[30px] bg-[#DB9C3A] rounded-[8px]'>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default Form
