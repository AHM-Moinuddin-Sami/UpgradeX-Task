"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

const Products = () => {

    useEffect(() => {
        AOS.init({
            // Customize AOS options here (optional)
        });
    }, [])

    const products = [
        {
            title: "Credit Cards",
            description: "100% Contactless Application Process with Instant Approval From Top Banks.",
            image: "/CC.webp",
            bg: "bg-green-50"
        },
        {
            title: "Loans",
            description: "100% online process. Instant offers. Affordable Rate of Interest on loans.",
            image: "/Loan.webp",
            bg: "bg-yellow-50"
        },
        {
            title: "Buy Now Pay Later",
            description: "Short-term financing that allows consumers to make purchases and pay for them over time.",
            image: "/BNPL.webp",
            bg: "bg-red-50"
        },
        {
            title: "Saving Accounts",
            description: "ZET offers range of savings account that suits your personal needs for the banking.",
            image: "/AccountSave.webp",
            bg: "bg-orange-50"
        },
    ]

    useEffect(() => {
        AOS.init({});
    }, [])


    return (
        <div className="products px-48 pt-10 pb-40 relative bg-blue-50">
            <Image
                alt=''
                width={500}
                height={500}
                src={"https://zetapp.in/_next/static/media/decImg.ead9275f.svg"}
                className='absolute top-0 left-0 grayscale hover:grayscale-0'
            ></Image>

            <Image
                alt=''
                width={500}
                height={500}
                src={"https://zetapp.in/_next/static/media/decImg2.3cc2964a.svg"}
                className='absolute bottom-0 right-0 z-0'
            ></Image>

            <div className='text-center my-12'>
                <h3>Products on ZET</h3>
                <p>We are trusted by best brand in the country</p>
            </div>

            <div className='grid md:grid-cols-2 gap-12 z-1'>
                {
                    products.map((product, index) => <Tilt
                        key={index}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                    >
                        <div data-aos='fade-up' className={` p-8 flex items-center ${product.bg} hover:bg-white rounded-xl productCard `}>
                            <Image
                                alt=''
                                width={500}
                                height={500}
                                src={product.image}
                                className=' w-48 h-48 '
                            ></Image>
                            <div className='pl-6'>
                                <h3 className=' text-xl font-semibold '>{product.title}</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </Tilt>)
                }
            </div>



        </div>
    );
};

export default Products;