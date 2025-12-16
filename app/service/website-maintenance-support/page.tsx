import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/digital-agency/Section1";
import Section2 from "@/components/sections/home/digital-agency/Section2";
import Section3 from "@/components/sections/home/digital-agency/Section3";
import Section4 from "@/components/sections/home/digital-agency/Section4";
import Section5 from "@/components/sections/home/digital-agency/Section5";
import Section6 from "@/components/sections/home/digital-agency/Section6";
import Section7 from "@/components/sections/home/digital-agency/Section7";
import Section8 from "@/components/sections/home/digital-agency/Section8";
import Section9 from "@/components/sections/home/digital-agency/Section9";
export default function Home() {
    return (
        <>
            <Layout theme="digital-agency">
                <Section1 />
                <Section2 bg="bg-light" />
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



