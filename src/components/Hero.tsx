import React from 'react'
import Button from './Button'
import Image1 from '../assets/group-business-workers-smiling-happy-confident-working-together-with-smile-face-applauding-one-them-office 1.png'
import Image2 from '../assets/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime 1.png'
import Group1 from '../assets/Group 75.svg'
import MickImg from '../assets/solar_podcast-outline.svg'
import CompImg from '../assets/streamline_computer-voice-mail-mic-audio-mike-music-microphone.svg'

export default function Hero() {
  return (
    <div className="px-12 md:px-36 lg:px-52 pt-8 md:py-36">
      <div className='flex flex-wrap-reverse lg:grid lg:grid-cols-2 gap-x-4'>
        <div className="font-inter">
          <div className='text-5xl lg:text-[#FFF] font-bold tracking-tight'>Learn how to launch a successful podcast</div>
          <div className='pt-10 pb-10 md:pb-20 pr-10 text-[1rem] lg:text-[#FFF] font-medium tracking-wider'>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          <Button name='Sign Up Now' width='py-6 px-14 w-[15rem] mt-4' />
        </div>
        <div className="hidden md:block relative mt-28 md:mt-0">
          <img src={Image1} alt="" className=' absolute md:top-16 lg:top-20 left-0 z-30' />
          <img src={Image2} alt="" className=' absolute top-0 left-12 z-20' />
          <img src={Group1} alt="" className='absolute xl:left-[5.5rem] 2xl:left-[3rem] top-20 z-10' />
          <img src={MickImg} alt="" className='absolute left-[35rem] top-36 w-20 h-20 z-40' />
          <img src={CompImg} alt="" className='absolute left-[31rem] -bottom-6 w-20 h-20 z-40' />
        </div>
        {/* <div className="relative mt-28 md:mt-0">
          <img src={Image1} alt="" className='absolute top-[5.62rem] left-0 z-30' />
          <img src={Image2} alt="" className='absolute left-16 top-0 z-20' />
          <img src={Group1} alt="" className='absolute left-[6.5rem] top-[4rem] z-10' />
          <img src={MickImg} alt="" className='absolute -right-[6rem] top-36 w-20 h-20 z-40' />
          <img src={CompImg} alt="" className='absolute left-[32rem] -bottom-8 w-20 h-20 z-40' />
        </div> */}
        {/* <div className='relative mt-28 lg:mt-0'>
          <img src={Image1} alt="" className='absolute top-[5rem] left-0 z-30' />
          <img src={Image2} alt="" className='absolute left-16 top-0 z-20' />
          <img src={Group1} alt="" className='absolute lg:bg-red-500 lg:left-[6rem] lg:top-[5.5rem] xl:bg-blue-500 xl:left-[6rem] xl:top-[4.5rem] z-10' />
        </div> */}

        {/* <div className='relative mt-28 lg:mt-0'>
          <img src={Image1} alt="" className='absolute top-[5rem] left-0 z-30' />
          <img src={Image2} alt="" className='absolute left-16 top-0 z-20' />
          <img src={Group1} alt="" className='absolute left-1/4 z-10' />
        </div> */}


      </div>
    </div>
  )
}
