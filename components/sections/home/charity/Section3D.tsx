import Link from "next/link";

export default function Section3D() {
    return (
        <>
            {/*charity-home-section-3D - FAQs*/}
            <section className="charity-home-section-3 position-relative overflow-hidden pt-120 pb-120" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container position-relative z-1">
                    <div className="text-center">
                        <div className="number-step d-flex align-items-center justify-content-center gap-3">
                            <i className="fa-solid fa-heart text-primary" />
                            <span className="btn-text">FAQs</span>
                        </div>
                        <h2 className="text-dark mt-3 mb-8 text-anime-style-3">
                            Frequently Asked 
                            <span className="bg-white border border-dark rounded-5 px-2">Questions</span>
                        </h2>
                    </div>
                    <div className="row flex-wrap align-items-end mt-80">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion-2">
                                <div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">1. What is WhatsApp Automation and how does it work?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            WhatsApp Automation uses chatbots, automated flows, and broadcasts to respond instantly to customers, qualify leads, and manage conversations using the official WhatsApp Business API.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">2. Is WhatsApp Automation safe and compliant with WhatsApp policies?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-2" className="collapse show" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we use the official WhatsApp Business API, ensuring secure communication, data privacy, and full compliance with WhatsApp's guidelines.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">3. How does lead capture and follow-up automation help my business?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            It captures leads from forms, ads, or websites and automatically follows up via WhatsApp or email, ensuring no lead is missed and response time stays instant.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">4. Can these automations integrate with my CRM or website?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we integrate automation with CRMs, websites, payment gateways, and ERP systems to maintain a smooth and centralized workflow.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">5. What is sales and marketing automation?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Sales and marketing automation streamlines lead nurturing, follow-ups, pipelines, and campaigns, helping teams save time while increasing conversions and efficiency.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">6. What are Zapier, Make, and n8n workflows used for?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-6" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            These tools connect multiple apps and automate repetitive tasks, such as syncing data, triggering messages, or updating records without manual intervention.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-7">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">7. How long does automation setup usually take?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-7" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Basic automation setups take 3–5 working days, while advanced workflows and integrations may take 1–2 weeks depending on complexity.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-8">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">8. Can automation workflows be customized for my business process?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-8" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, all workflows are fully customized based on your business model, customer journey, and operational requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-9">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">9. Will I have control and visibility after automation is set up?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-9" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Absolutely. You will have access to dashboards, logs, and reports, along with the ability to manually control or modify workflows when needed.
                                        </p>
                                    </div>
                                </div>

                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#automation-faq-10">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">10. How does automation improve business growth and ROI?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="automation-faq-10" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Automation reduces manual effort, improves response speed, enhances customer experience, and helps convert more leads, resulting in higher efficiency and better ROI.
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
