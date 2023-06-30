import React, { useState } from "react";
import NavImg from '../assets/nav.svg'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion"
import { fadeNav, fade } from "../animation"
import { Link } from "react-scroll"

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 w-full -z-10'>
                <img src={NavImg} alt='nav' className='h-full w-full' />
            </div>
            <motion.div variants={fadeNav} initial="hidden" animate="visible" className="px-12 md:px-36 lg:px-52 py-6">

                <div className="font-inter flex items-center flex-wrap text-white">

                    <Link activeClass="inactive" to="about" spy={true} smooth={true} offset={-150} duration={250} className="text-[1rem] font-bold tracking-wide">Logo</Link>
                    <button className="md:hidden right-20 top-6 absolute ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                        <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="false" />
                    </button>

                    {showNavbar ? (
                        <div>
                            <motion.div variants={fade} initial="hidden" animate="visible"
                                className=" flex overflow-x-hidden mx-12 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none lg:hidden"
                            >
                                <div className="relative my-6 mx-auto w-screen">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-r from-[#7A3199] to-[#161033] outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-6 border-solid rounded-t">
                                            <div className="text-xl font-base tracking-wide cursor-pointer">
                                                Logo
                                            </div>

                                            <button className="absolute right-6 top-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                                <HiX className="h-7 w-7" aria-hidden="false" />
                                            </button>

                                        </div>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                        </div>

                                        <div className="grid place-items-center text-xl py-2 w-full mb-4">
                                            <Link activeClass="inactive" to="about" spy={true} smooth={true} offset={-50} duration={250} className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center font-[400] cursor-pointer">
                                                About
                                            </Link>
                                            <Link activeClass="inactive" to="pricing" spy={true} smooth={true} offset={-50} duration={250} className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center font-[400] cursor-pointer">
                                                Pricing
                                            </Link>
                                            <Link activeClass="inactive" to="review" spy={true} smooth={true} offset={-50} duration={250} className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center font-[400] cursor-pointer">
                                                Review
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                        </div>
                    ) : null}

                    <div className="hidden w-full md:inline-flex md:flex-grow md:w-auto" >
                        <div className="md:inline-flex md:flex-row font-[400] md:ml-auto md:w-auto w-full text-[1rem] md:items-center items-start flex flex-col md:h-auto space-x-[6.69rem]" >
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-5} duration={250}>
                                <span className="cursor-pointer">About</span>
                            </Link>
                            <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-5} duration={250}>
                                <span className="cursor-pointer">Pricing</span>
                            </Link>
                            <Link activeClass="active" to="review" spy={true} smooth={true} offset={-5} duration={250}>
                                <span className="cursor-pointer">Review</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </motion.div>
        </div>
    )
}
