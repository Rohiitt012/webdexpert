import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/law-firm/Section1";
import Section2 from "@/components/sections/home/law-firm/Section2";
import Section3 from "@/components/sections/home/law-firm/Section3";
import Section3a from "@/components/sections/home/law-firm/Section3a";
import Section3b from "@/components/sections/home/law-firm/Section3b";
import Section3c from "@/components/sections/home/law-firm/Section3c";
import Section3d from "@/components/sections/home/law-firm/Section3d";
import Section3e from "@/components/sections/home/law-firm/Section3e";
import Section3f from "@/components/sections/home/law-firm/Section3f";
import Section4 from "@/components/sections/home/law-firm/Section4";
import Section5 from "@/components/sections/home/law-firm/Section5";
import Section6 from "@/components/sections/home/law-firm/Section6";
import Section7 from "@/components/sections/home/law-firm/Section7";
import Section8 from "@/components/sections/home/law-firm/Section8";
import Section9 from "@/components/sections/home/law-firm/Section9";
import Section10 from "@/components/sections/home/law-firm/Section10";
export default function Home() {
    return (
        <>
            <Layout theme="law-firm">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section3a />
                <Section3b />
                <Section3c />
                <Section3d />
                <Section3e />
                <Section3f />
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




