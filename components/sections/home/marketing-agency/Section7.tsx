"use client";
import CarouselTicker from "@/components/elements/CarouselTicker";

const slidesContent = [
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-1.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-2.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-3.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-4.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-5.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-6.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-3.png" alt="AstraX" />,
    <img src="/assets/img/marketing-agency-img/pages/marketing-agency/page-home/home-section-7/brand-5.png" alt="AstraX" />,
];

export default function Section7() {
    return (
        <>
            {/*marketing-agency-home home section 7*/}
            <section className="marketing-agency-home-section-7 pt-120">
                <div className="container-fluid" data-aos="fade-right" data-aos-delay={0}>
                    <CarouselTicker slides={slidesContent} />
                </div>
                <div className="container pt-120">
                    <div className="border-bottom" />
                </div>
            </section>
        </>
    );
}
