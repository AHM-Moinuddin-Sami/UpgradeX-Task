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
        <div className=" px-48 py-2" data-aos="fade-up" >
            <div className=" my-[6vw] flex bg-blue-50 ">
                <div className="p-[4vw] flex flex-col items-start justify-center">
                    <h3 className="mb-3 font-bold text-[40px]">Become a Financial Advisor and <span className="text-blue-700">Earn Rs.1 Lakh/Month</span></h3>
                    <p className="mb-4 text-xl">No investment required</p>
                    <button>
                        <Image
                            alt=""
                            src={"https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"}
                            height={100}
                            width={200}
                            className="px-2 py-4 rounded-lg w-32"
                        >

                        </Image>
                    </button>
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