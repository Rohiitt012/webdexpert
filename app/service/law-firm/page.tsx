import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/law-firm/Section1";
import Section2 from "@/components/sections/home/law-firm/Section2";
import Section3 from "@/components/sections/home/law-firm/Section3";
import Section4 from "@/components/sections/home/law-firm/Section4";
import Section5 from "@/components/sections/home/law-firm/Section5";
import Section6 from "@/components/sections/home/law-firm/Section6";
import Section7 from "@/components/sections/home/law-firm/Section7";
import Section8 from "@/components/sections/home/law-firm/Section8";
import Section9 from "@/components/sections/home/law-firm/Section9";
export default function Home() {
    return (
        <>
            <Layout theme="law-firm">
                <Section1 />
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