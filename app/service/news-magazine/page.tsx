import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/news-magazine/Section1";
import Section2 from "@/components/sections/home/news-magazine/Section2";
import Section3 from "@/components/sections/home/news-magazine/Section3";
import Section4 from "@/components/sections/home/news-magazine/Section4";
import Section5 from "@/components/sections/home/news-magazine/Section5";
import Section6 from "@/components/sections/home/news-magazine/Section6";
import Section7 from "@/components/sections/home/news-magazine/Section7";
export default function Home() {
    return (
        <>
            <Layout theme="news-magazine">
                <Section1 />
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