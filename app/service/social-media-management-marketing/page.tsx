import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/insurance-consultancy/Section1";
import Section2 from "@/components/sections/home/insurance-consultancy/Section2";
import Section4 from "@/components/sections/home/insurance-consultancy/Section4";
import Section5 from "@/components/sections/home/insurance-consultancy/Section5";
import Section6 from "@/components/sections/home/insurance-consultancy/Section6";
import Section7 from "@/components/sections/home/insurance-consultancy/Section7";
export default function Home() {
    return (
        <>
            <Layout theme="insurance-consultancy">
                <Section1 />
                <Section2 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
            </Layout>
        </>
    );
}



