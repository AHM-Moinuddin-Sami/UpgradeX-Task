import AboutBanner from "@/Components/AboutBanner/AboutBanner";
import AboutFooter from "@/Components/AboutFooter/AboutFooter";
import Featured from "@/Components/Featured/Featured";
import Founders from "@/Components/Founders/Founders";
import Growth from "@/Components/Growth/Growth";
import Investors from "@/Components/Investors/Investors";

export const metadata = {
    title: 'ZET - About Us'
}

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Growth></Growth>
            <Featured></Featured>
            <Investors></Investors>
            <Founders></Founders>
            <AboutFooter></AboutFooter>
        </div>
    );
};

export default About;