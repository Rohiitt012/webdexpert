import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/fintech-solution/Section1";
import Section2 from "@/components/sections/home/fintech-solution/Section2";
import Section2A from "@/components/sections/home/fintech-solution/Section2A";
import Section2B from "@/components/sections/home/fintech-solution/Section2B";
import Section2C from "@/components/sections/home/fintech-solution/Section2C";
import Section2D from "@/components/sections/home/fintech-solution/Section2D";
import Section2E from "@/components/sections/home/fintech-solution/Section2E";
import Section2F from "@/components/sections/home/fintech-solution/Section2F";
import Section2G from "@/components/sections/home/fintech-solution/Section2G";
import Section2H from "@/components/sections/home/fintech-solution/Section2H";
import Section2I from "@/components/sections/home/fintech-solution/Section2I";
import Section2J from "@/components/sections/home/fintech-solution/Section2J";
import Section2K from "@/components/sections/home/fintech-solution/Section2K";
import Section2L from "@/components/sections/home/fintech-solution/Section2L";
import Section2M from "@/components/sections/home/fintech-solution/Section2M";
import Section3 from "@/components/sections/home/fintech-solution/Section3";
import Section4 from "@/components/sections/home/fintech-solution/Section4";
import Section5 from "@/components/sections/home/fintech-solution/Section5";
import Section6 from "@/components/sections/home/fintech-solution/Section6";
import Section6A from "@/components/sections/home/fintech-solution/Section6A";
import Section7 from "@/components/sections/home/fintech-solution/Section7";
export default function Home() {
    return (
        <>
            <Layout theme="fintech-solution">
                <Section1 />
                <StatsTicker />
                <Section2 showLogos={false} />
                <Section2A />
                <Section2B />
                <Section2C />
                <Section2D />
                <Section2E />
                <Section2F />
                <Section2G />
                <Section2H />
                <Section2I />
                <Section2J />
                <Section2K />
                <Section2L />
                <Section2M />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section6A />
                <Section7 />
            </Layout>
        </>
    );
}




