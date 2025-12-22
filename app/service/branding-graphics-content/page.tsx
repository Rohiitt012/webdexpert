import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/creative-studio/Section1";
import Section2 from "@/components/sections/home/creative-studio/Section2";
import Section2A from "@/components/sections/home/creative-studio/Section2A";
import Section3 from "@/components/sections/home/creative-studio/Section3";
import Section3A from "@/components/sections/home/creative-studio/Section3A";
import Section4 from "@/components/sections/home/creative-studio/Section4";
import Section5 from "@/components/sections/home/creative-studio/Section5";
import Section8 from "@/components/sections/home/creative-studio/Section8";
import Section9 from "@/components/sections/home/creative-studio/Section9";
export default function Home() {
    return (
        <>
            <Layout theme="creative-studio">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section2A />
                <Section3 display="d-none" title1="" title2="d-none" background="bg-white" />
                <Section3A />
                <Section5 />
                <Section8 background="bg-white" />
                <Section9 />
            </Layout>
        </>
    );
}




