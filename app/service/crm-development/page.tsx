import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/fintech-solution/Section1";
import Section2 from "@/components/sections/home/fintech-solution/Section2";
import Section3 from "@/components/sections/home/fintech-solution/Section3";
import Section3a from "@/components/sections/home/fintech-solution/Section3a";
import Section3b from "@/components/sections/home/fintech-solution/Section3b";
import Section5 from "@/components/sections/home/fintech-solution/Section5";
import Section6 from "@/components/sections/home/fintech-solution/Section6";
import Section7 from "@/components/sections/home/fintech-solution/Section7";
import Section12 from "@/components/sections/home/fintech-solution/Section12";
export default function Home() {
    return (
        <>
            <Layout theme="fintech-solution">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section3a />
                <Section3b />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section12 />
            </Layout>
        </>
    );
}




