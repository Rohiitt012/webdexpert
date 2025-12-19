import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/coworking-space/Section1";
import Section2 from "@/components/sections/home/coworking-space/Section2";
import Section3 from "@/components/sections/home/coworking-space/Section3";
import Section4 from "@/components/sections/home/coworking-space/Section4";
import Section5 from "@/components/sections/home/coworking-space/Section5";
import Section6 from "@/components/sections/home/coworking-space/Section6";
import Section7 from "@/components/sections/home/coworking-space/Section7";
import Section8 from "@/components/sections/home/coworking-space/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="coworking-space">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 background="" />
                <Section7 />
                <Section8 />
            </Layout>
        </>
    );
}