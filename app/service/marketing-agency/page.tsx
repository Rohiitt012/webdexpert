import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/marketing-agency/Section1";
import Section2 from "@/components/sections/home/marketing-agency/Section2";
import Section3 from "@/components/sections/home/marketing-agency/Section3";
import Section4 from "@/components/sections/home/marketing-agency/Section4";
import Section5 from "@/components/sections/home/marketing-agency/Section5";
import Section6 from "@/components/sections/home/marketing-agency/Section6";
import Section7 from "@/components/sections/home/marketing-agency/Section7";
import Section8 from "@/components/sections/home/marketing-agency/Section8";
import Section9 from "@/components/sections/home/marketing-agency/Section9";
export default function Home() {
    return (
        <>
            <Layout theme="marketing-agency">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
            </Layout>
        </>
    );
}