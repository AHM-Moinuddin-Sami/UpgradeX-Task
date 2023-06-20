import Image from "next/image";

const Featured = () => {
    return (
        <div className="pt-2 pb-24 px-48">
            <p className="my-12 text-[40px] font-extrabold">Got Featured</p>
            <div className="flex gap-3">
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/EconomicTimes.webp"}
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/Inc42.webp"}
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/mint.webp"}
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/YourStory.webp"}
                ></Image>
                <Image
                    alt=""
                    height={200}
                    width={300}
                    src={"/BusinessStandard.webp"}
                ></Image>

            </div>
        </div>
    );
};

export default Featured;