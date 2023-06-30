import React from 'react'
import DPImg from "../assets/Lolla 1.png"
import StarImg from '../assets/star.svg'
import ArraowImg from '../assets/pepicons-pencil_arrow-right.svg'

export default function Review() {
  return (
    <div id="review">
      <div className='px-12 md:px-36 lg:px-52 pt-36 pb-6'>
        <h1 className='font-inter text-[2.5rem] font-[700]'>Review from customers</h1>
        <p className='font-poppins text-[0.75rem] max-w-[26rem] py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
      </div>


      <div className='overflow-hidden'>
        <div className='w-full flex flex-row space-x-3 mx-12 md:mx-48'>

          <div className="rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-12 py-9 w-[465px] h-[238px] z-10">
            <div className="grid grid-rows-3 grid-cols-[auto,1fr] gap-x-6">
              <img src={DPImg} alt='' className="row-span-3 rounded-full w-[70px] aspect-square"></img>
              <span className="col-start-2 font-bold">Lolla Smith</span>
              <span className="col-start-2 mt-auto text-sm font-poppins">Microsoft</span>
              <div className="col-start-2 flex gap-2">
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
            <p className="mt-6 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>

          <div className="rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-12 py-9 w-[465px] h-[238px] z-10">
            <div className="grid grid-rows-3 grid-cols-[auto,1fr] gap-x-6">
              <img src={DPImg} alt='' className="row-span-3 rounded-full w-[70px] aspect-square"></img>
              <span className="col-start-2 font-bold">Lolla Smith</span>
              <span className="col-start-2 mt-auto text-sm font-poppins">Microsoft</span>
              <div className="col-start-2 flex gap-2">
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
            <p className="mt-6 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>

          <div className="rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-12 py-9 w-[465px] h-[238px] z-10">
            <div className="grid grid-rows-3 grid-cols-[auto,1fr] gap-x-6">
              <img src={DPImg} alt='' className="row-span-3 rounded-full w-[70px] aspect-square"></img>
              <span className="col-start-2 font-bold">Lolla Smith</span>
              <span className="col-start-2 mt-auto text-sm font-poppins">Microsoft</span>
              <div className="col-start-2 flex gap-2">
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
                <img src={StarImg} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
            <p className="mt-6 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>

        </div>
      </div>

      <div className='relative'>
        <img src={ArraowImg} alt="" className='absolute -top-36 right-[22%] cursor-pointer rounded-full bg-[#E1A6FF66] w-12 h-12 z-20'></img>
      </div>

      <div className='flex flex-row items-center py-8 justify-center'>
        <div className="h-4 w-4 bg-[#7A3199] rounded-full"></div>
        <div className="h-4 w-4 bg-white rounded-full"></div>
        <div className="h-4 w-4 bg-white rounded-full"></div>
      </div>

    </div>
  )
}
