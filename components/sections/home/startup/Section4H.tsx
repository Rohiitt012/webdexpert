import Link from "next/link";

export default function Section4H() {
    return (
        <>
            {/*startup home section 4H - Why Choose XzectLabs for Website Redesigning*/}
            <section className="startup-home-section-4h position-relative py-60 bg-white">
                <div className="container position-relative z-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5 col-md-10">
                            <h2 className="text-dark my-3 text-anime-style-2 fw-bold">
                                Why Choose XzectLabs for Website Redesigning?
                            </h2>
                            <p className="pb-4 wow img-custom-anim-top text-dark text-opacity-75">
                                With decades of digital experience and a deep understanding of both design and SEO, <span className="text-primary fw-semibold">XzectLabs</span> is one of the most trusted names in <span className="text-primary fw-semibold">website redesigning</span> not only in India but across the globe. We blend creativity with <span className="text-primary fw-semibold">conversion strategy</span> to deliver websites that don't just look good—they perform.
                            </p>

                            {/* Feature 1: Proven Expertise */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={0}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <circle cx={12} cy={8} r={4} stroke="white" strokeWidth={2} fill="none" />
                                        <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="white" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">Proven Expertise in Website Redesigning</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        We've redesigned websites across industries, from small local businesses to enterprise clients, with real, measurable results.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2: Local Advantage */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <circle cx={12} cy={12} r={10} stroke="white" strokeWidth={2} fill="none" />
                                        <path d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">Local Advantage with Global Standards</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        Based in India, we understand the local business landscape, yet we apply international best practices to every redesign project.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3: In-House Teams */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={400}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <circle cx={12} cy={12} r={10} stroke="white" strokeWidth={2} fill="none" />
                                        <circle cx={12} cy={12} r={3} fill="white" />
                                        <path d="M12 2 L12 5 M12 19 L12 22 M2 12 L5 12 M19 12 L22 12" stroke="white" strokeWidth={2} strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">In-House UI/UX, SEO & Development Teams</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        No outsourcing. Our dedicated teams work collaboratively to ensure design, performance, and search rankings are all aligned.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4: Transparent Process */}
                            <div className="d-flex align-items-start mb-4" data-aos="fade-up" data-aos-delay={600}>
                                <div className="icon-shape icon-50 bg-primary rounded-3 me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z" fill="white" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-dark fw-bold mb-2">Transparent Process & Timely Delivery</h5>
                                    <p className="text-dark text-opacity-75 mb-0">
                                        We stick to clear timelines, regular updates, and milestone-driven delivery. No guesswork—just results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-block">
                                <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                    <img data-aos="zoom-in" data-aos-delay={600} className="rounded-3 shadow position-relative z-1 shadow-1 w-100" src="/assets/img/startup-img/pages/startup/page-home/home-section-4/img-1.png" alt="Website Redesigning Services" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

