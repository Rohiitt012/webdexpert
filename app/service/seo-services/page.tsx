import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/seo-agency/Section1";
import Section2 from "@/components/sections/home/seo-agency/Section2";
import Section3 from "@/components/sections/home/seo-agency/Section3";
import Section3A from "@/components/sections/home/seo-agency/Section3A";
import Section4 from "@/components/sections/home/seo-agency/Section4";
import Section4A from "@/components/sections/home/seo-agency/Section4A";
import Section5 from "@/components/sections/home/seo-agency/Section5";
import Section5A from "@/components/sections/home/seo-agency/Section5A";
import Section6 from "@/components/sections/home/seo-agency/Section6";
import Section6A from "@/components/sections/home/seo-agency/Section6A";
import Section7 from "@/components/sections/home/seo-agency/Section7";
import Section8A from "@/components/sections/home/seo-agency/Section8A";
import Section9 from "@/components/sections/home/seo-agency/Section9";
export default function Home() {
    return (
        <>
            <Layout theme="seo-agency">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section9 />
                <Section3A />
                <Section4 />
                <Section4A />
                <Section5 />
                <Section5A />
                <Section6A />
                <Section6 />
                <Section7 />
                <Section8A />
            </Layout>
        </>
    );
}




