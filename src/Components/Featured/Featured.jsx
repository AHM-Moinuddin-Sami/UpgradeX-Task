import Image from "next/image";

const Featured = () => {
    return (
        <div className="pt-2 pb-24 px-4 md:px-48">
            <p className="my-12 text-2xl md:text-[40px] font-extrabold">Got Featured</p>
            <div className="flex md:gap-3">
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/EconomicTimes.webp"}
                    className="w-[15vw] h-auto"
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/Inc42.webp"}
                    className="w-[15vw] h-auto"
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/mint.webp"}
                    className="w-[15vw] h-auto"
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/YourStory.webp"}
                    className="w-[15vw] h-auto"
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/BusinessStandard.webp"}
                    className="w-[15vw] h-auto"
                ></Image>

            </div>
        </div>
    );
};

export default Featured;