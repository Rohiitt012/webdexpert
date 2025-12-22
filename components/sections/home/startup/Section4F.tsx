import Link from "next/link";

export default function Section4F() {
    return (
        <>
            {/*startup home section 4F - Website Redesign Services We Offer*/}
            <section className="startup-home-section-4f position-relative py-60 bg-white">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="d-block">
                                <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                    <img data-aos="zoom-in" data-aos-delay={600} className="rounded-3 shadow position-relative z-1 shadow-1 w-100" src="/assets/img/startup-img/pages/startup/page-home/home-section-4/img-1.png" alt="Website Redesign Services" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5 col-md-10">
                            <h2 className="text-dark my-3 text-anime-style-2 fw-bold">
                                Website Redesign Services We Offer
                            </h2>
                            <p className="pb-4 wow img-custom-anim-top text-dark text-opacity-75">
                                Not every website needs the same solution. That's why we offer a wide range of <span className="text-primary fw-semibold">website redesigning services</span> tailored to meet your business goals. Whether you need a full overhaul or a focused update, our <span className="text-primary fw-semibold">India</span>-based team delivers modern, mobile-ready, and conversion-optimized designs.
                            </p>

                            {/* Service 1: Full Website Redesign */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={0}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20V20H4V4ZM6 6V18H18V6H6ZM8 8H16V10H8V8ZM8 12H16V14H8V12Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">Full Website Redesign</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        Complete transformation of outdated websites, enhanced design, content, SEO, speed, and mobile responsiveness.
                                    </p>
                                </div>
                            </div>

                            {/* Service 2: E-commerce Website Redesign */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M7 18C5.9 18 5 17.1 5 16C5 14.9 5.9 14 7 14C8.1 14 9 14.9 9 16C9 17.1 8.1 18 7 18ZM17 18C15.9 18 15 17.1 15 16C15 14.9 15.9 14 17 14C18.1 14 19 14.9 19 16C19 17.1 18.1 18 17 18ZM7 12L8.1 8H19L21 12H7ZM6.2 6L4.8 2H2V4H4.2L5.6 8H19.8L21.2 4H23V2H20.8L19.4 6H6.2Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">E-commerce Website Redesign</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        Improve product presentation, checkout flow, and mobile usability to increase conversions and reduce bounce rates.
                                    </p>
                                </div>
                            </div>

                            {/* Service 3: Landing Page Redesign */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={400}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20V6H4V4ZM4 8H20V10H4V8ZM4 12H20V14H4V12ZM4 16H20V18H4V16Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">Landing Page Redesign</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        Focused redesigns to increase lead generation, form submissions, and user engagement on key campaign pages.
                                    </p>
                                </div>
                            </div>

                            {/* Service 4: CMS Redesign & Upgrades */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={600}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect x={4} y={4} width={6} height={6} rx={1} fill="white" />
                                        <rect x={14} y={4} width={6} height={6} rx={1} fill="white" />
                                        <rect x={4} y={14} width={6} height={6} rx={1} fill="white" />
                                        <rect x={14} y={14} width={6} height={6} rx={1} fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">CMS Redesign & Upgrades</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        We modernize and migrate your content management system (WordPress, Shopify, etc.) for speed, security, and usability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

