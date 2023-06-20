"use client";
import Image from "next/image";
import { useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Investors = () => {

    useEffect(() => {
        AOS.init({
            // Customize AOS options here (optional)
        });
    }, [])

    const companies = [
        "/InvCompany1.webp",
        "/InvCompany2.webp",
        "/InvCompany3.webp",
        "/InvCompany4.webp",
    ]

    const investors = [
        {
            name: "Kunal Shah",
            title: "Founder, CRED",
            img: "/Inv1.webp"
        },
        {
            name: "Gaurav Munjal",
            title: "Founder, UNACADEMY",
            img: "/Inv2.webp"
        },
        {
            name: "Aakrit Vaish",
            title: "Co-Founder, HAPTIK",
            img: "/Inv3.webp"
        },
        {
            name: "Harshil Mathur",
            title: "Co-Founder, RAZORPAY",
            img: "/Inv4.webp"
        },
        {
            name: "Vidit Aatrey",
            title: "Founder & CEO, MEESHO",
            img: "/Inv5.webp"
        },
        {
            name: "Amirsh Rau",
            title: "CEO, PINELABS",
            img: "/Inv6.webp"
        },
        {
            name: "Lalit Keshre",
            title: "CEO, GROWW",
            img: "/Inv7.webp"
        },
        {
            name: "Gokul Rajaram",
            title: "Product, DOORDASH",
            img: "/Inv8.webp"
        },
    ]

    return (
        <div className="md:px-48 px-4 pt-[2vw] pb-[8vw]">
            <p className="my-12 text-2xl md:text-[40px] font-extrabold">Meet the Investors</p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-[2vw] mt-[4vw] justify-between">
                {
                    companies.map((comapny, index) => <Tilt
                        key={index}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                    >
                        <Image
                            data-aos='fade-up'
                            alt=""
                            height={220}
                            width={350}
                            src={comapny}
                            className="md:p-8 duration-[200ms] hover:transition-all hover:duration-[200ms] hover:scale-[1.03]"
                        ></Image>
                    </Tilt>)
                }
            </div>
            <div className="mt-[4vw] grid grid-cols-3 justify-between md:grid-cols-5 gap-[2vw]">
                {
                    investors.map((investor, index) => <Tilt
                        key={index}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                    >
                        <div className="md:p-8 duration-[200ms] hover:transition-all hover:duration-[200ms] hover:scale-[1.03]">
                            <Image
                                alt=""
                                height={340}
                                width={400}
                                src={investor.img}
                            ></Image>
                            <p className="mt-4 font-medium md:text-base text-sm">{investor.name}</p>
                            <p className="md:text-base text-xs">{investor.title}</p>
                        </div>
                    </Tilt>)
                }
            </div>
        </div>
    );
};

export default Investors;