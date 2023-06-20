"use client";
import Image from "next/image";
import { useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Founders = () => {

    const founders = [
        {
            name: "Manish Shara",
            title: "Co-Founder & CEO",
            link: "https://www.linkedin.com/in/manishshara/",
            img: "/Manish.webp"
        },
        {
            name: "Yash Desai",
            title: "Co-Founder",
            link: "https://www.linkedin.com/in/yash-desai-20a3b5b1/",
            img: "/Yash.webp"
        },
        {
            name: "Lokesh Agarwal",
            title: "CTO",
            link: "https://www.linkedin.com/in/lokesh198/",
            img: "/Lokesh.webp"
        },
    ]

    return (
        <div className="bg-blue-50 px-48 pt-[2vw] pb-[8vw]">
            <div className="text-center">
                <p>Meet Our Founders</p>
                <p>Few words from founders desk</p>
            </div>
            <div className="mt-[4vw] gap-[2vw] w-full justify-between grid md:grid-cols-3">
                {
                    founders.map((founder, index) => <Tilt
                        key={index}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        className="w-fit p-8 "
                    >
                        <div className="duration-[200ms] hover:transition-all hover:duration-[200ms] hover:scale-[1.03]">
                            <Image
                                alt=""
                                height={440}
                                width={440}
                                src={founder.img}
                            ></Image>
                            <div className="flex mt-4  justify-between items-center text-2xl">
                                <div>
                                    <p>{founder.name}</p>
                                    <p>{founder.title}</p>
                                </div>
                                <a href={founder.link}>
                                    <Image
                                        alt=""
                                        height={80}
                                        width={80}
                                        src={"/LinkedIn.webp"}
                                        className="h-10 w-10"
                                    ></Image>
                                </a>
                            </div>
                        </div>
                    </Tilt>)
                }
            </div>
        </div>
    );
};

export default Founders;