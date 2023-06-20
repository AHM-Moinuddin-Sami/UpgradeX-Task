import AboutBanner from "@/Components/AboutBanner/AboutBanner";
import Featured from "@/Components/Featured/Featured";
import Growth from "@/Components/Growth/Growth";
import Investors from "@/Components/Investors/Investors";

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Growth></Growth>
            <Featured></Featured>
            <Investors></Investors>
        </div>
    );
};

export default About;