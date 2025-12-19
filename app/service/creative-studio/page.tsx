import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/creative-studio/Section1";
import Section2 from "@/components/sections/home/creative-studio/Section2";
import Section3 from "@/components/sections/home/creative-studio/Section3";
import Section4 from "@/components/sections/home/creative-studio/Section4";
import Section5 from "@/components/sections/home/creative-studio/Section5";
import Section6 from "@/components/sections/home/creative-studio/Section6";
import Section7 from "@/components/sections/home/creative-studio/Section7";
import Section8 from "@/components/sections/home/creative-studio/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="creative-studio">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 display="" title1="" title2="d-none" background="bg-secondary-2" />
                <Section4 />
                <Section5 />
                <Section6 background="" />
                <Section7 />
                <Section8 background="bg-secondary-2" />
            </Layout>
        </>
    );
}