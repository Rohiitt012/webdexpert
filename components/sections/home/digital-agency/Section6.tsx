import Link from "next/link";

export default function Section6({ bg }: any) {
    return (
        <>
            {/*digital-agency section 6*/}
            <section className={`digital-agency-home-section-6 position-relative overflow-hidden py-120 ${bg}`}>
                <div className="container">
                    <div className="text-center">
                        <div className="mb-4 bg-primary rounded-pill border border-dark btn-text d-inline-block px-3 py-2">
                            <span className="text-dark">faq options</span>
                        </div>
                        <h2 className="mb-80 text-anime-style-3">
                            Questions? We're glad <br />
                            you asked.
                        </h2>
                    </div>
                    <div className="row g-lg-5">
                        <div className="col-lg-6">
                            <div className="accordion">
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Why is university education important?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse1" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>What challenges do university students face?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse2" className="collapse show" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How can universities support students' well-being?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse3" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse4">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>What role do internships play?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse4" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={800}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse5">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How valuable is studying abroad?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse5" className="collapse" data-bs-parent=".accordion">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion2">
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={0}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse6">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How does university shape careers?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse6" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse7">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How does student debt impact graduates?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse7" className="collapse show" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse8">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>How do rankings affect choices?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse8" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={600}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse9">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>What are online universities' benefits?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse9" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
                                    </div>
                                </div>
                                <div className="px-0 card collapse-custom mb-3 border-dark" data-aos="fade-up" data-aos-delay={800}>
                                    <div className="p-0 card-header border-0 bg-transparent">
                                        <Link className="collapsed p-3 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#collapse10">
                                            <span className="me-3 arrow" />
                                            <h6 className="mb-0 fs-20">
                                                <span>Are university degrees worth it?</span>
                                            </h6>
                                        </Link>
                                    </div>
                                    <div id="collapse10" className="collapse" data-bs-parent=".accordion2">
                                        <p className="pe-3 fs-6 fw-regular ps-7">We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
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
