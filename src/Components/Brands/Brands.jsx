import Image from "next/image";
import Marquee from "react-fast-marquee";

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
        <div className="">
            <div className="text-center">
                <h3>Top Brands on ZET</h3>
                <p>We are trusted by best brands in the country</p>
            </div>
            <Marquee
                speed={200}
            >
                {
                    images.map((image, index) => <Image
                        key={index}
                        alt=""
                        width={200}
                        height={200}
                        src={image}
                        className="w-[300px] h-auto border-xl border rounded-xl mr-5 px-10 py-2"
                    ></Image>)
                }
            </Marquee>

        </div >
    );
};

export default Brands;