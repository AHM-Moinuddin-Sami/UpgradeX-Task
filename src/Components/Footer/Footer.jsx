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
                
                <div className='flex flex-wrap mt-[3vw] justify-between'>
                    <div className='flex flex-col'>
                        <h3>Company</h3>
                        <a href="/about">About us</a>
                        <a href="/">Partner with us</a>
                        <a href="/  ">Blog</a>
                    </div>

                    <div className='flex flex-col'>
                        <h3>Legal</h3>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Services</a>
                    </div>

                    <div className='flex flex-col'>
                        <h3>Contact</h3>
                        <a href="/about" className="flex">
                            <Image
                            alt=""
                            height={24}
                            width={25}
                            src={"/EmailIcon.webp"}
                            className="w-5 h-5 pr-[10px]"
                            ></Image>
                            <p>hi@zetapp.in</p>
                        </a>
                        <a href="/">+91-7417274072</a>
                    </div>

                    <div className='flex flex-col'>
                        <h3>Social</h3>
                        <a href="/about">About us</a>
                        <a href="/">Partner with us</a>
                        <a href="/  ">Blog</a>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;