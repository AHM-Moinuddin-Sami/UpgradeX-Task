"use client";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);



    return (
        <>
            <div className="flex justify-between py-3.5 px-4 md:px-24 border-b">
                <div>
                    <a href="/">
                        <Image
                            alt=""
                            src={"https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"}
                            width={90}
                            height={50}
                            className="w-[90px] h-auto"
                        ></Image>
                    </a>
                </div>
                <div className="gap-8 md:flex hidden text-lg items-center">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="">Partner With Us</a>
                    <a href="">Blog</a>
                    <a href=""> <button className="rounded-lg h-8 w-[120%] text-white bg-blue-500">Download ZET</button> </a>
                </div>
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>{
                    dropdownOpen ? <RxCross1></RxCross1> : <GiHamburgerMenu></GiHamburgerMenu>
                }</button>

            </div>
            <div className={`flex items-center text-center flex-col ${dropdownOpen ? '' : 'hidden'} `}>
                <a href="/" className="py-8">Home</a>
                <a href="/about" className="py-8">About Us</a>
                <a href="" className="py-8">Partner With Us</a>
                <a href="" className="py-8">Blog</a>
                <a href="" className="py-8"> <button className="rounded-lg h-8 w-full ">Download ZET</button> </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=in.onecode.app">
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        src={"https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"}
                        className="my-4 w-[160px] py-8"
                    >
                    </Image>
                </a>
            </div>
        </>
    );
};

export default NavBar;