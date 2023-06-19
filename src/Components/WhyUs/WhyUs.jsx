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
        <div className='py-[4vw] flex px-48'>
            <Image
                alt=''
                width={200}
                height={200}
                src={"/bgImg.webp"}
                className='h-[75%] w-[15%] hidden md:block pl-[1.5vw] absolute z-[1]'
            ></Image>
            <div className='whyus flex flex-col items-center my-12'>
                <h3 className='text-center'>
                    Why <span>Choose Us</span>
                </h3>
                <p className='text-center'>Why we are loved by our customers</p>
                <Image
                    alt=''
                    width={277}
                    height={374}
                    src={"/whyUsHero.webp"}
                    className='mt-[3vw] h-full hidden md:block w-full z-[2]'
                ></Image>
            </div>
            <div className='grid md:grid-cols-3 py-[2vw] px-[3vw] w-fit gap-5'>
                {
                    items.map((item, i) =>
                        <div key={i} className='w-fit px-8 py-5' data-aos='fade-up'>
                            <Image
                                alt=''
                                width={500}
                                height={500}
                                src={item.image}
                                className=' w-[6vw] '
                            ></Image>
                            <h3 className='font-semibold text-xl '>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default WhyUs;