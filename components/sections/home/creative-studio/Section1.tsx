"use client";
import CarouselTickerrtl from "@/components/elements/CarouselTicker-rtl";
import CarouselTicker from "@/components/elements/CarouselTicker";
import Link from "next/link";

const slidesContent = [
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-1.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-2.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-3.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-4.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-3.png" alt="AstraX" />,
];

const slidesContent2 = [
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-5.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-6.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-7.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-8.png" alt="AstraX" />,
    <img className="rounded-4" data-aos="zoom-in" data-aos-delay={0} src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-6.png" alt="AstraX" />,
];

export default function Section1() {
    return (
        <>
            {/*creative-studio section 1*/}
            <section className="creative-studio-section-1 pt-120 overflow-hidden">
                <div className="container">
                    <div className="wow img-custom-anim-left pb-5">
                        <span className="fs-200 fw-bold mb-0 lh-1 text-dark">Creative</span>
                        <div className="d-flex flex-wrap align-items-center gap-4">
                            <strong className="text-primary fs-200 lh-1">Studio</strong>
                            <div className="btn-switch position-relative" data-background="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/img-bg.png">
                                <div className="position-absolute top-50 start-100 translate-middle me-5 pb-8">
                                    <div className="icon-shape icon-80 rounded-circle bg-primary" />
                                </div>
                                <div className="position-absolute top-100 start-0 translate-middle-y me-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={51} height={51} viewBox="0 0 51 51" fill="none">
                                        <circle cx="25.5" cy="25.5" r="25.5" fill="#47AD8D" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 g-5">
                        <div className="col-lg-8">
                            <div className="d-flex flex-wrap gap-lg-5 gap-4">
                                <div className="d-flex align-items-center gap-3" data-aos="fade-up" data-aos-delay={0}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                        <circle cx={20} cy={20} r="19.5" fill="white" stroke="#FF652E" />
                                        <path d="M20 10L22.2451 16.9098H29.5106L23.6327 21.1803L25.8779 28.0902L20 23.8197L14.1221 28.0902L16.3673 21.1803L10.4894 16.9098H17.7549L20 10Z" fill="#292929" />
                                    </svg>
                                    <div>
                                        <h6 className="fs-20 mb-0">5 Star</h6>
                                        <p className="mb-0">
                                            Read Our Success<span className="text-dark">Star's</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap align-items-center gap-3" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/author-1.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/author-2.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/author-3.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/author-4.png" alt="AstraX" />
                                        </div>
                                        <div className="avatar m--4 icon-shape rounded-circle overflow-hidden border border-white border-2">
                                            <img src="/assets/img/creative-studio-img/pages/creative-studio/page-home/home-section-1/author-5.png" alt="AstraX" />
                                        </div>
                                    </div>
                                    <p className="mb-0">
                                        Believed by more than a <br className="d-block" />
                                        thousand people
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto" data-aos="fade-up" data-aos-delay={400}>
                            <p>A digital agency is a company that specializes in providing a range of services focused on digital marketing, technology, and online presence.</p>
                            <Link href="/contact" className="btn btn-dark mt-4">
                                <span>let’s talk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <g clipPath="url(#clip0_1181_1466)">
                                        <path d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z" fill="white" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Carausel Scroll */}
                <div className="d-none d-md-flex pt-120">
                    <CarouselTickerrtl slides={slidesContent} />
                </div>
                <div className="d-none d-md-flex mt-8">
                    <CarouselTicker slides={slidesContent2} />
                </div>
            </section>
        </>
    );
}
