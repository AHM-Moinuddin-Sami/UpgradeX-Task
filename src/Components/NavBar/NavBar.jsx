import Image from "next/image";

const NavBar = () => {
    return (
        <div className="flex justify-between py-3.5 px-24 border-b">
            <div>
                <Image
                    alt=""
                    src={"https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"}
                    width={90}
                    height={50}
                    className="w-[90px] h-auto"
                >

                </Image>
            </div>
            <div className="flex gap-8 text-lg items-center">
                <a href="">Home</a>
                <a href="/about">About Us</a>
                <a href="">Partner With Us</a>
                <a href="">Blog</a>
                <a href=""> <button className="rounded-lg h-8 w-[120%] text-white bg-blue-500">Download ZET</button> </a>
            </div>
        </div>
    );
};

export default NavBar;