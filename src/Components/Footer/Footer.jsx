import Image from "next/image";

const Footer = () => {
    return (
        <footer className=' min-h-[530px] '>
            <div className='py-2 px-4 md:px-48'>
                <div className='flex py-5'>
                    <Image
                        alt=''
                        width={90}
                        height={50}
                        src={"https://zetapp.in/_next/static/media/zet_logo_white.04e35c15.svg"}
                        className="w-24 h-auto"
                    >

                    </Image>
                </div>

                <hr />

                <div className='flex flex-wrap mt-[3vw] justify-between text-white'>
                    <div className='flex flex-col'>
                        <h3 className=" text-lg font-medium mb-4 ">Company</h3>
                        <a href="/about" className="mb-3">About us</a>
                        <a href="/" className="mb-3">Partner with us</a>
                        <a href="/  " className="mb-3">Blog</a>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className=" text-lg font-medium mb-4 ">Legal</h3>
                        <a href="/" className="mb-3">Privacy Policy</a>
                        <a href="/" className="mb-3">Terms of Services</a>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className=" text-lg font-medium mb-4 ">Contact</h3>
                        <a href="/about" className="flex mb-3">
                            <Image
                                alt=""
                                height={24}
                                width={30}
                                src={"/EmailIcon.webp"}
                                className=" pr-[10px]"
                            ></Image>
                            <p>hi@zetapp.in</p>
                        </a>
                        <a href="/" className="flex">
                            <Image
                                alt=""
                                height={24}
                                width={30}
                                src={"/PhoneIcon.webp"}
                                className=" pr-[10px] mb-3"
                            ></Image>
                            <p>+91-7417274072</p>
                        </a>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className=" text-lg font-medium mb-4 ">Social</h3>
                        <div className="flex">
                            <a href="https://www.linkedin.com/company/zetapp-in/">
                                <Image
                                    alt=""
                                    height={32}
                                    width={32}
                                    src={"https://zetapp.in/_next/static/media/linkedin.99e56649.svg"}
                                    className="w-full h-full pr-[10px] "
                                ></Image>
                            </a>

                            <a href="">
                                <Image
                                    alt=""
                                    height={32}
                                    width={32}
                                    src={"https://zetapp.in/_next/static/media/instagram.146ba33a.svg"}
                                    className="w-full h-full pr-[10px] "
                                ></Image>
                            </a>

                            <a href="">
                                <Image
                                    alt=""
                                    height={32}
                                    width={32}
                                    src={"https://zetapp.in/_next/static/media/facebook.cccadfff.svg"}
                                    className="w-full h-full pr-[10px] "
                                ></Image>
                            </a>

                            <a href="">
                                <Image
                                    alt=""
                                    height={32}
                                    width={32}
                                    src={"https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg"}
                                    className="w-full h-full pr-[10px] "
                                ></Image>
                            </a>

                            <a href="">
                                <Image
                                    alt=""
                                    height={32}
                                    width={32}
                                    src={"https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg"}
                                    className="w-full h-full pr-[10px] "
                                ></Image>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;