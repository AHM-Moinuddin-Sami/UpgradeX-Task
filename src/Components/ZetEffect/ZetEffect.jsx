"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/pagination";

const ZetEffect = () => {

    return (
        <div className=" polygon bg-blue-600 py-[10vw] px-48" >

            <div className=" bg-blue-400 max-w-full flex min-h-0 min-w-0 rounded items-center innerPolygon pt-[7vw] pb-[3vw]">
                <Image
                    alt=""
                    width={500}
                    height={500}
                    src={"/peeps1.webp"}
                    className="w-auto hidden md:block h-[27vw] mix-blend-luminosity"
                ></Image>
                <div className="p-[4vw] -ml-[10vw]">
                    <h3 className="mb-[2vw] text-white font-extrabold text-2xl">
                        THE ZET EFFECT
                    </h3>
                    <div>
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper max-w-[80vw] md:max-w-[35vw]">
                            <SwiperSlide>
                                <p className="font-extrabold text-3xl text-white">More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="font-extrabold text-3xl text-white">14 Lakh+ Financial Advisor across India are using ZET to increase their income</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className="font-extrabold text-3xl text-white">We helped customers in more than 50 cities to get their first financial product</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ZetEffect;