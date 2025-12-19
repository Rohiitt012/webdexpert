import Link from "next/link";

export default function Section12() {
    return (
        <>
            {/*fintech-solution home faq section*/}
            <section className="fintech-solution-home-section-12 position-relative overflow-hidden py-120" style={{ backgroundColor: "#eff4f9", minHeight: '400px' }}>
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <span className="small-line" />
                            <span className="btn-text text-primary">FAQs.</span>
                            <span className="small-line" />
                        </div>
                        <h2 className="text-dark mt-3 mb-8 text-anime-style-2">Get every single answer</h2>
                    </div>
                    <div className="row flex-wrap align-items-end">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion-2">
                                <div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What services does your platform provide?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Our platform offers custom CRM development, user authentication, automation, integrations, loyalty programs, and customer data management solutions.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Is user authentication secure on your system?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-2" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we implement secure authentication protocols, role-based access, and data protection measures to ensure complete system security.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Can your CRM manage leads and sales pipelines?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Absolutely. Our CRM efficiently manages leads, pipelines, clients, and sales tracking to improve team productivity and conversion rates.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you offer automated WhatsApp and email follow-ups?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we provide automated WhatsApp and email follow-ups to improve customer engagement and reduce manual communication efforts.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Does your system support API integrations?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Our CRM integrates seamlessly with Meta, Google, WhatsApp, and other APIs for centralized data and smoother workflows.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Can businesses run loyalty programs using your platform?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-6" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, our platform enables customized loyalty programs to reward customers, increase retention, and strengthen long-term relationships.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent mb-3">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-7">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How do you manage customer preferences and data?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-7" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We securely store customer preferences and interaction history to deliver personalized experiences and data-driven business decisions.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-bottom-3 collapse-custom bg-transparent mb-0">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#fs-faq-8">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Why should businesses choose your solution?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="fs-faq-8" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            We provide scalable, secure, and automation-driven solutions designed to support business growth and improve operational efficiency.
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

