import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/digital-agency/Section1";
import Section2 from "@/components/sections/home/digital-agency/Section2";
import Section3 from "@/components/sections/home/digital-agency/Section3";
import Section3A from "@/components/sections/home/digital-agency/Section3A";
import Section4 from "@/components/sections/home/digital-agency/Section4";
import Section5 from "@/components/sections/home/digital-agency/Section5";
import Section6 from "@/components/sections/home/digital-agency/Section6";
import Section8 from "@/components/sections/home/digital-agency/Section8";
import Section10 from "@/components/sections/home/digital-agency/Section10";
import Section11 from "@/components/sections/home/digital-agency/Section11";
export default function Home() {
    return (
        <>
            <Layout theme="digital-agency">
                <Section1 />
                <StatsTicker />
                <Section2 bg="bg-light" />
                <Section3 />
                <Section3A />
                <Section4 />
                <Section10 />
                <Section11 />
                <Section5 />
                <Section6 />
                <Section8 />
            </Layout>
        </>
    );
}




