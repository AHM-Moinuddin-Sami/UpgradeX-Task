"use client";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {

    const images = [
        "/Amex.webp",
        "/Aufin.webp",
        "/Axis.webp",
        "/Bajaj.webp",
        "/BOB.webp",
        "/Icici.webp",
        "/Idfc.webp",
        "/IndusInd.webp",
        "/StandardChartered.webp",
        "/YesBank.webp",
    ]

    return (
        <div className="md:px-48">
            <div className="text-center my-4 md:my-12">
                <h3 className="text-2xl font-semibold">Top Brands on ZET</h3>
                <p>We are trusted by best brands in the country</p>
            </div>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay
            speed={3500}
            loop={true}
            modules={[Autoplay]}
            >
                {
                    images.map((image, index) =>
                        <SwiperSlide
                            key={index}
                            
                        >
                            <Image

                                alt=""
                                width={200}
                                height={200}
                                src={image}
                                className="w-[300px] h-auto border-xl border md:rounded-xl md:mr-5 md:px-10 md:my-2 md:py-2"
                            ></Image>
                        </SwiperSlide>
                    )
                }
            </Swiper>

        </div >
    );
};

export default Brands;