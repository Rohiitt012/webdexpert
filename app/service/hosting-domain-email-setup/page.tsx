import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/it-solutions/Section1";
import Section2 from "@/components/sections/home/it-solutions/Section2";
import Section2A from "@/components/sections/home/it-solutions/Section2A";
import Section2B from "@/components/sections/home/it-solutions/Section2B";
import Section2C from "@/components/sections/home/it-solutions/Section2C";
import Section3 from "@/components/sections/home/it-solutions/Section3";
import Section4 from "@/components/sections/home/it-solutions/Section4";
import Section5 from "@/components/sections/home/it-solutions/Section5";
import Section6 from "@/components/sections/home/it-solutions/Section6";
import Section7 from "@/components/sections/home/it-solutions/Section7";
import Section8 from "@/components/sections/home/it-solutions/Section8";
import Section9 from "@/components/sections/home/it-solutions/Section9";
import Section10 from "@/components/sections/home/it-solutions/Section10";
import Section11 from "@/components/sections/home/it-solutions/Section11";
export default function Home() {
    return (
        <>
            <Layout theme="it-solutions">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section2A />
                <Section2B />
                <Section2C />
                <Section3 />
                <Section11 />
                <Section4 bg="" />
                <Section5 />
                <Section9 />
                <Section6 />
                <Section8 />
                <Section10 />
            </Layout>
        </>
    );
}




