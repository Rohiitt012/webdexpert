import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/application/Section1";
import Section2 from "@/components/sections/home/application/Section2";
import Section3 from "@/components/sections/home/application/Section3";
import Section4 from "@/components/sections/home/application/Section4";
import Section5 from "@/components/sections/home/application/Section5";
import Section6 from "@/components/sections/home/application/Section6";
import Section7 from "@/components/sections/home/application/Section7";
import Section8 from "@/components/sections/home/application/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="application">
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



