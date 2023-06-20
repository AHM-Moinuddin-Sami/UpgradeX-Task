"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const WhyUs = () => {

    const items = [
        {
            title: "Zero Investment",
            description: "Build your business without any investment",
            image: "https://zetapp.in/_next/static/media/zero_investment.d5743aab.svg",
        },
        {
            title: "Quick Payout",
            description: "Direct Payout in your bank account in short time",
            image: "https://zetapp.in/_next/static/media/quick_payout.1d689e09.svg",
        },
        {
            title: "Limitless Earnings",
            description: "Direct Payout in your bank account in short time",
            image: "https://zetapp.in/_next/static/media/Fin_products.0e8a0582.svg",
        },
        {
            title: "Training and Upskilling",
            description: "Get trained by finance and sales experts",
            image: "https://zetapp.in/_next/static/media/Icon_support.c8382fc1.svg",
        },
        {
            title: "Customer Support",
            description: "Access tools and content to build relationship",
            image: "https://zetapp.in/_next/static/media/customerSupport.5780cd23.svg",
        },
        {
            title: "Financial Products",
            description: "Trustworthy & high-rated products & categories",
            image: "https://zetapp.in/_next/static/media/financialProduct.1b3d6eec.svg",
        },
    ]

    useEffect(() => {
        AOS.init({
            // Customize AOS options here (optional)
        });
    }, [])

    return (
        <div className='py-[4vw] relative flex md:flex-row flex-col px-4 md:px-48'>
            <Image
                alt=''
                width={200}
                height={200}
                src={"/bgImg.webp"}
                className='h-[75%] w-[15%] hidden bottom-0 md:block pl-[1.5vw] absolute z-[1]'
            ></Image>
            <div className='flex flex-col md:w-[374px] md:h-[374px] items-center my-12'>
                <h3 className='text-center font-semibold text-2xl'>
                    Why <span className='text-blue-600'>Choose Us</span>
                </h3>
                <p className='text-center font-medium'>Why we are loved by our customers</p>
                <Image
                    alt=''
                    width={277}
                    height={374}
                    src={"/whyUsHero.webp"}
                    className='mt-[3vw] h-full hidden md:block w-full z-[2]'
                ></Image>
            </div>
            <div className='grid md:grid-cols-3  py-[2vw] px-[3vw] w-fit gap-5'>
                {
                    items.map((item, i) =>
                        <div key={i} className='w-fit flex flex-col items-center md:block px-8 py-5' data-aos='fade-up'>
                            <Image
                                alt=''
                                width={500}
                                height={500}
                                src={item.image}
                                className=' w-[16vw] md:w-[6vw] '
                            ></Image>
                            <h3 className='font-semibold text-xl text-center md:text-left'>{item.title}</h3>
                            <p className='text-center md:text-start'>{item.description}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default WhyUs;