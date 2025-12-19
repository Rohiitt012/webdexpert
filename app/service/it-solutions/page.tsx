import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/it-solutions/Section1";
import Section2 from "@/components/sections/home/it-solutions/Section2";
import Section3 from "@/components/sections/home/it-solutions/Section3";
import Section4 from "@/components/sections/home/it-solutions/Section4";
import Section5 from "@/components/sections/home/it-solutions/Section5";
import Section6 from "@/components/sections/home/it-solutions/Section6";
import Section7 from "@/components/sections/home/it-solutions/Section7";
import Section8 from "@/components/sections/home/it-solutions/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="it-solutions">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section4 bg="" />
                <Section5 />
                <Section6 />
                <Section7 bg_section="bg-light-2" bg_card="bg-white" classList="" />
                <Section8 />
            </Layout>
        </>
    );
}