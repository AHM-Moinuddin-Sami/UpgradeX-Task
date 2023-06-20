import Image from "next/image";

const Growth = () => {
    return (
        <div className="pb-6">
            <p className="mb-20 mt-16 text-center text-[40px] font-bold">How we evolved over the years</p>
            <Image
            alt=""
            height={500}
            width={1920}
            src={"/Growth.webp"}
            className="w-[80%] mx-auto"
            ></Image>
        </div>
    );
};

export default Growth;

