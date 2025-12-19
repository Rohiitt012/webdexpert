import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/tax-software/Section1";
import Section2 from "@/components/sections/home/tax-software/Section2";
import Section3 from "@/components/sections/home/tax-software/Section3";
import Section4 from "@/components/sections/home/tax-software/Section4";
import Section5 from "@/components/sections/home/tax-software/Section5";
import Section6 from "@/components/sections/home/tax-software/Section6";
import Section7 from "@/components/sections/home/tax-software/Section7";
export default function Home() {
    return (
        <>
            <Layout theme="tax-software">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
            </Layout>
        </>
    );
}