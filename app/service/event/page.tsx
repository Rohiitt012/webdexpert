import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/event/Section1";
import Section2 from "@/components/sections/home/event/Section2";
import Section3 from "@/components/sections/home/event/Section3";
import Section4 from "@/components/sections/home/event/Section4";
import Section5 from "@/components/sections/home/event/Section5";
import Section6 from "@/components/sections/home/event/Section6";
import Section7 from "@/components/sections/home/event/Section7";
import Section8 from "@/components/sections/home/event/Section8";
export default function Home() {
    return (
        <>
            <Layout theme="event">
                <Section1 />
                <Section2 />
                <Section3 pt="" />
                <Section4 />
                <Section5 />
                <Section6 bg="bg-light" />
                <Section7 />
                <Section8 />
            </Layout>
        </>
    );
}