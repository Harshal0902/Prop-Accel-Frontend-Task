import React from 'react'
import FooterImg from '../assets/footer.svg'
import Button from './Button'
import FBIMg from "../assets/mdi_facebook.svg"
import YTImg from '../assets/uil_youtube.svg'
import IGIMg from '../assets/basil_instagram-solid.svg'
import TWImg from '../assets/uil_twitter.svg'

export default function Footer() {
    return (
        <div className=''>
            <div className='px-12 md:px-36 lg:px-52 py-44'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold font-inter'>We have what you're looking for</h1>
                    <p className='text-[14px] text-center py-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] font-poppins max-w-[700px] mx-auto break-words'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
                </div>
                <div className='grid place-items-center'>
                    <Button name='Get Started Now' width='py-4 px-14 w-[18rem] mt-4 md:mt-12' />
                </div>
            </div>

            <div className='relative flex flex-col items-center'>
                <img src={FooterImg} alt="" className='absolute bottom-0 left-0 right-0 -z-10 w-full' />
                <div className='absolute border-t-[1px] w-3/4 bottom-8 border-white'>
                    <div className='flex md:flex-row flex-col items-center mt-6 justify-between px-4 md:px-12 font-poppins'>
                        <div className="text-[#FFF] text-[0.75rem]">All Right Reserved @Copyright 2023</div>
                        <div className="flex flex-row space-x-6">
                            <h1 className='text-[0.75rem] text-[#FFF]'>Terms of Service</h1>
                            <h1 className='text-[0.75rem] text-[#FFF]'>Privacy Policy</h1>
                            <h1 className='text-[0.75rem] text-[#FFF]'>Product</h1>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <img src={FBIMg} alt="" className='w-5 h-5' />
                            <img src={YTImg} alt="" className='w-5 h-5' />
                            <img src={IGIMg} alt="" className='w-5 h-5' />
                            <img src={TWImg} alt="" className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
