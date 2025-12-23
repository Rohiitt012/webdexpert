import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/charity/Section1";
import Section2 from "@/components/sections/home/charity/Section2";
import Section2A from "@/components/sections/home/charity/Section2A";
import Section2B from "@/components/sections/home/charity/Section2B";
import Section2C from "@/components/sections/home/charity/Section2C";
import Section3 from "@/components/sections/home/charity/Section3";
import Section3A from "@/components/sections/home/charity/Section3A";
import Section3B from "@/components/sections/home/charity/Section3B";
import Section3C from "@/components/sections/home/charity/Section3C";
import Section3D from "@/components/sections/home/charity/Section3D";
import Section4A from "@/components/sections/home/charity/Section4A";
import Section4B from "@/components/sections/home/charity/Section4B";
import Section4C from "@/components/sections/home/charity/Section4C";
import Section5 from "@/components/sections/home/charity/Section5";
import Section6 from "@/components/sections/home/charity/Section6";
import Section7 from "@/components/sections/home/charity/Section7";
import StatsTicker from "@/components/common/StatsTicker";

export default function Home() {
    return (
        <>
            <Layout theme="charity">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section2A />
                <Section2B />
                <Section2C />
                <Section3 />
                <Section3A />
                <Section3B />
                <Section3C />
                <Section4A />
                <Section4B />
                <Section4C />
                <Section5 />
                <Section6 />
                <Section3D />
                <Section7 />
            </Layout>
        </>
    );
}
