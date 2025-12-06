import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/ai-solutions/Section1";
import Section2 from "@/components/sections/home/ai-solutions/Section2";
import Section3 from "@/components/sections/home/ai-solutions/Section3";
import Section4 from "@/components/sections/home/ai-solutions/Section4";
import Section5 from "@/components/sections/home/ai-solutions/Section5";
import Section6 from "@/components/sections/home/ai-solutions/Section6";
import Section7 from "@/components/sections/home/ai-solutions/Section7";
import Section8 from "@/components/sections/home/ai-solutions/Section8";
import Section9 from "@/components/sections/home/ai-solutions/Section9";
export default function Home() {
    return (
        <>
            <Layout theme="ai-solutions">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 bordertop="border-top" />
            </Layout>
        </>
    );
}