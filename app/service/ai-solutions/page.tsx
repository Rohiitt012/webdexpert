import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/data-analysis/Section1";
import Section2 from "@/components/sections/home/data-analysis/Section2";
import Section2C from "@/components/sections/home/data-analysis/Section2C";
import Section2A from "@/components/sections/home/data-analysis/Section2A";
import Section2B from "@/components/sections/home/data-analysis/Section2B";
import Section3 from "@/components/sections/home/data-analysis/Section3";
import Section3A from "@/components/sections/home/data-analysis/Section3A";
import Section3B from "@/components/sections/home/data-analysis/Section3B";
import Section3C from "@/components/sections/home/data-analysis/Section3C";
import Section3D from "@/components/sections/home/data-analysis/Section3D";
import Section4 from "@/components/sections/home/data-analysis/Section4";
import Section5 from "@/components/sections/home/data-analysis/Section5";
import Section6 from "@/components/sections/home/data-analysis/Section6";
import Section7 from "@/components/sections/home/data-analysis/Section7";
import Section8 from "@/components/sections/home/data-analysis/Section8";
import Section9 from "@/components/sections/home/data-analysis/Section9";
import Section10 from "@/components/sections/home/data-analysis/Section10";
export default function Home() {
    return (
        <>
            <Layout theme="data-analysis">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section2C />
                <Section2A />
                <Section2B />
                <Section3 />
                <Section3D />
                <Section3A />
                <Section3B />
                <Section3C />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
            </Layout>
        </>
    );
}