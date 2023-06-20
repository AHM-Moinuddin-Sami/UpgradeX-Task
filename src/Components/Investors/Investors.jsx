"use client";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';

const Investors = () => {
    return (
        <div className="px-48 pt-[2vw] pb-[8vw]">
            <p className="my-12 text-[40px] font-extrabold">Meet the Investors</p>
            <div className="flex gap-[2vw] mt-[4vw] justify-between">
                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                >
                    <Image
                        alt=""
                        height={220}
                        width={350}
                        src={"/InvCompany1.webp"}
                        className="p-8 duration-[400ms] hover:transition-all hover:duration-[400ms] hover:scale-[1.03]"
                    ></Image>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                >
                    <Image
                        alt=""
                        height={220}
                        width={350}
                        src={"/InvCompany2.webp"}
                        className="p-8 duration-[400ms] hover:transition-all hover:duration-[400ms] hover:scale-[1.03]"
                    ></Image>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                >
                    <Image
                        alt=""
                        height={220}
                        width={350}
                        src={"/InvCompany3.webp"}
                        className="p-8 duration-[400ms] hover:transition-all hover:duration-[400ms] hover:scale-[1.03]"
                    ></Image>
                </Tilt>
                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                >
                    <Image
                        alt=""
                        height={220}
                        width={350}
                        src={"/InvCompany4.webp"}
                        className="p-8 duration-[400ms] hover:transition-all hover:duration-[400ms] hover:scale-[1.03]"
                    ></Image>
                </Tilt>
            </div>
        </div>
    );
};

export default Investors;