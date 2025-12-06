import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/fintech-app/Section1";
import Section2 from "@/components/sections/home/fintech-app/Section2";
import Section3 from "@/components/sections/home/fintech-app/Section3";
import Section4 from "@/components/sections/home/fintech-app/Section4";
import Section5 from "@/components/sections/home/fintech-app/Section5";
import Section6 from "@/components/sections/home/fintech-app/Section6";
import Section7 from "@/components/sections/home/fintech-app/Section7";
import Section8 from "@/components/sections/home/fintech-app/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="fintech-app">
                <Section1 />
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