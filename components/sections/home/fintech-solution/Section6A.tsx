import Link from "next/link";

export default function Section6A() {
    return (
        <>
            {/*fintech-solution home faq section*/}
            <section className="fintech-solution-home-section-6a position-relative overflow-hidden py-120" style={{ backgroundColor: "#eff4f9" }}>
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
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-1">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">What is a custom CRM system and why should my business use it?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-1" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            A custom CRM system is designed specifically according to your business processes, unlike generic CRM tools. It helps manage leads, customers, sales, and communication in one centralized platform, improving efficiency, accuracy, and long-term scalability.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-2">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How does your CRM help with lead and pipeline management?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-2" className="collapse show" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Our CRM captures leads from multiple sources, automatically assigns them, tracks each lead's journey, and provides full visibility of your sales pipeline. This helps your team prioritize high-quality leads and close deals faster.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-3">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Can I track all client interactions inside the CRM?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-3" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, our CRM records complete client interaction history including calls, emails, WhatsApp messages, meetings, and deal updates, allowing your team to maintain better relationships and deliver personalized communication.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-4">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you provide automated WhatsApp and email follow-ups?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-4" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Absolutely. We set up automated follow-ups based on lead status, time triggers, or customer actions. This ensures timely communication, reduces manual work, and increases response and conversion rates significantly.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-5">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Is the CRM suitable for both sales and support teams?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-5" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, our CRM is designed to support both sales and customer support teams with role-based access, task management, and clear visibility into client data, ensuring smoother collaboration and better service delivery.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-6">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Can your CRM integrate with Meta, Google, and WhatsApp?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-6" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we provide seamless CRM integration with Meta Ads, Google Ads, and WhatsApp using secure APIs. This enables real-time lead syncing, accurate conversion tracking, and centralized campaign performance reporting.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-7">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How secure is the custom CRM system?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-7" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Security is a top priority. Our CRM systems include secure authentication, role-based access control, encrypted data storage, and regular security updates to protect your business and customer data.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-8">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Will the CRM scale as my business grows?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-8" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, our CRM solutions are built with scalable architecture, allowing you to add users, features, integrations, and automation workflows as your business expands without performance issues.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-9">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">Do you offer customization and feature upgrades after launch?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-9" className="collapse" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Yes, we provide ongoing customization, feature enhancements, and performance improvements even after the CRM is live, ensuring it continues to meet your evolving business requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-0 card rounded-top-0 collapse-custom bg-transparent">
                                    <div className="p-0 card-header border-0 rounded-bottom-3 bg-transparent">
                                        <Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#crm-faq-10">
                                            <h6 className="text-primary mb-0">
                                                <span className="text-dark">How do you provide reporting and analytics inside the CRM?</span>
                                            </h6>
                                            <span className="ms-auto arrow" />
                                        </Link>
                                    </div>
                                    <div id="crm-faq-10" className="collapse rounded-bottom-3" data-bs-parent=".accordion-2">
                                        <p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
                                            Our CRM includes detailed dashboards and reports showing leads, conversions, sales performance, follow-up effectiveness, and team productivity, helping you make data-driven decisions and improve overall business performance.
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

