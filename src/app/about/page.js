import AboutBanner from "@/Components/AboutBanner/AboutBanner";
import Featured from "@/Components/Featured/Featured";
import Founders from "@/Components/Founders/Founders";
import Growth from "@/Components/Growth/Growth";
import Investors from "@/Components/Investors/Investors";

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Growth></Growth>
            <Featured></Featured>
            <Investors></Investors>
            <Founders></Founders>
        </div>
    );
};

export default About;