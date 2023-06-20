"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Steps = () => {
    return (
        <div className="steps pt-[15vw] pb-[20vw] relative px-48">
            <div className="mt-[2vw] mb-[5vw] text-center text-white">
                <h3 className="text-2xl font-semibold">Start Earning in 3 Easy Steps</h3>
                <p>We have create the app the make your earning easy</p>
            </div>
            <div className="relative">
                <Swiper
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="flex">
                            <div className="p-[10vw]">
                                <p className=" stepsTitle bg-blue-500 w-fit py-3 pr-7 text-white font-semibold text-lg pl-5 mb-[2vw] ">Step 1</p>
                                <p className="mb-[2vw] text-3xl font-extrabold text-blue-500 ">Download the app and sign up as a new ZED agent</p>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=in.onecode.app">
                                    <Image
                                        alt=""
                                        width={100}
                                        height={100}
                                        src={"https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"}
                                    >
                                    </Image>
                                </a>
                            </div>
                            <video autoPlay muted loop src="/ZET - Become a Certified Financial Advisor and Earn Big.mp4"
                                className="w-80 relative h-full rounded-3xl "
                            ></video>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex">
                            <div className="p-[10vw]">
                                <p className=" stepsTitle bg-blue-500 w-fit py-3 pr-7 text-white font-semibold text-lg pl-5 mb-[2vw] ">Step 2</p>
                                <p className="mb-[2vw] text-3xl font-extrabold text-blue-500 ">Register your customers and Recommend financial products</p>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=in.onecode.app">
                                    <Image
                                        alt=""
                                        width={100}
                                        height={100}
                                        src={"https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"}
                                    >
                                    </Image>
                                </a>
                            </div>
                            <video autoPlay muted loop src="/ZET - Become a Certified Financial Advisor and Earn Big.mp4"
                                className="w-80 relative h-full rounded-3xl "
                            ></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex">
                            <div className="p-[10vw]">
                                <p className=" stepsTitle bg-blue-500 w-fit py-3 pr-7 text-white font-semibold text-lg pl-5 mb-[2vw] ">Step 3</p>
                                <p className="mb-[2vw] text-3xl font-extrabold text-blue-500 ">Start earning upto ₹ 1 Lakh every month</p>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=in.onecode.app">
                                    <Image
                                        alt=""
                                        width={100}
                                        height={100}
                                        src={"https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"}
                                    >
                                    </Image>
                                </a>
                            </div>
                            <video autoPlay muted loop src="/ZET - Become a Certified Financial Advisor and Earn Big.mp4"
                                className="w-80 relative h-full rounded-3xl "
                            ></video>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <Image
                    alt=""
                    width={378}
                    height={652}
                    src="https://zetapp.in/_next/static/media/earningDec.b2e9943b.svg"
                    className="absolute -top-32 -right-7 "
                ></Image>
            </div>
        </div>
    );
};

export default Steps;