import Image from "next/image";

const AboutFooter = () => {
    return (
        <div>
            <Image
            alt=""
            width={2880}
            height={1200}
            src={"/AboutUsFooter.webp"}
            className="h-auto w-full mb-1"
            ></Image>
        </div>
    );
};

export default AboutFooter;