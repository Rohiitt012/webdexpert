import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/logistics/Section1";
import Section2 from "@/components/sections/home/logistics/Section2";
import Section3 from "@/components/sections/home/logistics/Section3";
import Section4 from "@/components/sections/home/logistics/Section4";
import Section5 from "@/components/sections/home/logistics/Section5";
import Section6 from "@/components/sections/home/logistics/Section6";
import Section7 from "@/components/sections/home/logistics/Section7";
import Section8 from "@/components/sections/home/logistics/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="logistics">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </Layout>
        </>
    );
}