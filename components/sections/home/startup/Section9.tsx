import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*startup home faq section - Website Redesign FAQs*/}
            <section className="startup-home-section-9 position-relative overflow-hidden py-120" style={{ backgroundColor: "#eff4f9" }}>
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">FAQs</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-dark mt-3 mb-8 text-anime-style-2">Get every single answer</h2>
                    </div>
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion-2">
                                <div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What services do you provide?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We provide complete website solutions including UI/UX redesign, speed and performance optimization, mobile responsiveness, and SEO-optimized website structures tailored to business goals.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you redesign existing websites?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-2" className="collapse show" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we specialize in redesigning existing websites to give them a modern look, improved performance, better navigation, and enhanced user experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Will my website be mobile-friendly?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we ensure your website is fully responsive and works smoothly across all devices, including mobiles, tablets, and desktops.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How does speed optimization help my business?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Speed optimization improves loading time, enhances user experience, reduces bounce rates, and positively impacts search engine rankings.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Is SEO included in your website development?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, all our websites are built with SEO-friendly structures, clean code, and optimized layouts to support better search visibility.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How long does a website redesign take?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-6" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            The timeline depends on project complexity, but most website redesign projects are completed within a few weeks.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-7">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Can you improve my website's user experience?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-7" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Absolutely. Our UI/UX-focused approach enhances usability, accessibility, and customer engagement for better conversions.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card rounded-top-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-bottom-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#wro-faq-8">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you support businesses of all sizes?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="wro-faq-8" className="collapse rounded-bottom-3" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we work with startups, small businesses, and growing enterprises, offering scalable solutions to meet their needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

