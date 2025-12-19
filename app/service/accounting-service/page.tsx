import Layout from "@/components/layout/Layout";
import StatsTicker from "@/components/common/StatsTicker";
import Section1 from "@/components/sections/home/accounting-service/Section1";
import Section2 from "@/components/sections/home/accounting-service/Section2";
import Section3 from "@/components/sections/home/accounting-service/Section3";
import Section4 from "@/components/sections/home/accounting-service/Section4";
import Section5 from "@/components/sections/home/accounting-service/Section5";
import Section6 from "@/components/sections/home/accounting-service/Section6";
export default function Home() {
    return (
        <>
            <Layout theme="accounting-service">
                <Section1 />
                <StatsTicker />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </Layout>
        </>
    );
}