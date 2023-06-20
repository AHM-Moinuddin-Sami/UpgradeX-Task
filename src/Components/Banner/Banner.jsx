"use client";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    useEffect(() => {
        AOS.init({
            // Customize AOS options here (optional)
        });
    }, [])

    return (
        <div className=" px-4 md:px-48 py-8" data-aos="fade-up" >
            <div className=" my-[6vw] flex bg-blue-100 ">
                <div className="p-[4vw] flex flex-col md:items-start items-center justify-center">
                    <h3 className="mb-3 md:text-left text-center font-bold text-[40px]">Become a Financial Advisor and <span className="text-blue-700">Earn Rs.1 Lakh/Month</span></h3>
                    <p className="mb-4 text-xl">No investment required</p>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=in.onecode.app">
                        <Image
                            alt=""
                            width={100}
                            height={100}
                            src={"https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"}
                            className="my-4 w-[160px]"
                        >
                        </Image>
                    </a>    
                </div>
                <div className="mt-[-3vw] hidden md:block">
                    <Image
                        alt=""
                        src={'/HeroImgNew.png'}
                        width={738}
                        height={701}
                        className="w-[35vw] pr-8"
                    >
                    </Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;