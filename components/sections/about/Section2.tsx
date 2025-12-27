"use client";

import CarouselTicker from "@/components/elements/CarouselTicker";
import Link from "next/link";

const slidesContent = [
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-1.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">NeuraEdge</h5>
    </Link>,
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-2.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">AetherAI</h5>
    </Link>,
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-3.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">Intellecta</h5>
    </Link>,
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-4.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">CognifyAI</h5>
    </Link>,
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-5.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">SynthMind</h5>
    </Link>,
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-6.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">InnoAIve</h5>
    </Link>,
    <Link href="#" className="d-inline-flex align-items-center gap-3 bg-white px-5">
        <img src="/assets/img/ai-solutions-img/pages/ai-solutions/icons/lg-3.svg" alt="AstraX" />
        <h5 className="mb-0 fw-regular fs-30 fw-bold text-dark py-6">Intellecta</h5>
    </Link>,
];

export default function Section2() {
    return (
        <>
            {/*ai-solutions-about section 2*/}
            <section className="ai-solutions-about-section-2 position-relative overflow-hidden pt-120 pb-120 bg-white">
                <div className="container position-relative z-1">
                    <div className="row align-items-end">
                        <div className="col-lg-7">
                            <div className="d-inline-flex align-items-center gap-3">
                                <span className="small-line" />
                                <span className="btn-text text-warning">Our Vision</span>
                            </div>
                            <h2 className="text-dark my-3 mb-lg-0">Empowering Businesses Through Technology</h2>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <p className="pb-4 mb-0 mb-0">We envision empowering businesses by delivering innovative digital solutions, smart automation, and advanced technologies that simplify operations, improve efficiency, and support sustainable long-term growth in an ever-evolving digital landscape.</p>
                        </div>
                    </div>
                    <div className="row mt-5 g-4">
                        <div className="col-md-5">
                            <img className="" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-about/img-2.png" alt="AstraX" />
                        </div>
                        <div className="col-md-7">
                            <img className="" src="/assets/img/ai-solutions-img/pages/ai-solutions/page-about/img-3.png" alt="AstraX" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
