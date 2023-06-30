import React from 'react'
import AboutImg from '../assets/pngwing 1.png'
import Button from './Button'

const Course = [
  {
    title: 'Interactive Features',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    title: 'Interactive Features',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    title: 'Interactive Features',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    title: 'Interactive Features',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  }
]
export default function About() {

  return (
    <div>
      <div className='relative'>
        <img src={AboutImg} alt="" className='absolute -top-40 2xl:-top-28 right-0 -z-10' />
      </div>
      <div id="about" className='px-12 md:px-36 lg:px-52 py-12 lg:py-36'>
        <div className='flex flex-wrap-reverse items-center justify-center xl:grid xl:grid-cols-2 gap-x-8'>

          <div className='grid sm:grid-cols-2 sm:grid-rows-2 gap-12 xl:gap-x-[-4rem] py-6'>
            {Course.map((course, index) => (
              <div
                key={index}
                className={`p-7 border-[0.5px] font-poppins h-[10rem] w-[16.75rem] border-[#7A3199] rounded-xl ${index === 1 || index === 3 ? 'mt-4' : ''}`}>
                <h3 className='text-xl font-bold text-center tracking-wide'>{course.title}</h3>
                <p className='text-[12px] py-2'>{course.description}</p>
              </div>
            ))}
          </div>

          <div className='w-full xl:pl-28 pb-8 md:pb-0'>
            <div className='text-5xl font-inter font-bold tracking-tight'>About the Course</div>
            <div className='text-lg font-poppins py-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</div>
            <Button name='Explore Now' width='py-4 px-14 w-[15rem] mt-4' />
          </div>
        </div>
      </div>
    </div>
  )
}
