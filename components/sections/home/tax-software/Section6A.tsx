import Link from "next/link";

export default function Section6A() {
    return (
        <>
            {/*tax-software home faq section*/}
            <section className="tax-software-home-section-6a position-relative overflow-hidden py-120" style={{ backgroundColor: "#eff4f9" }}>
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
                            <div className="accordion service-faq-accordion" id="automationFaqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading1">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-1" aria-expanded="false" aria-controls="automation-faq-1">
                                            What is WhatsApp Automation and how can it help my business?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-1" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading1" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            WhatsApp Automation allows businesses to automate conversations using chatbots, predefined flows, and broadcast messages. It helps respond instantly to customer queries, qualify leads, send updates, and provide support without manual effort, improving engagement and conversions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading2">
                                        <button className="accordion-button d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-2" aria-expanded="true" aria-controls="automation-faq-2">
                                            What type of WhatsApp chatbots and flows do you build?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-2" className="accordion-collapse collapse show" aria-labelledby="automationFaqHeading2" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            We build custom chatbots and conversation flows for lead generation, FAQs, appointment booking, order tracking, payments, and customer support. Each flow is designed according to your business goals and customer journey.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading3">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-3" aria-expanded="false" aria-controls="automation-faq-3">
                                            Is WhatsApp broadcast safe and compliant?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-3" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading3" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Yes, we follow WhatsApp Business API guidelines and best practices. Broadcast messages are sent only to opted-in users, ensuring compliance, better delivery rates, and improved customer trust.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading4">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-4" aria-expanded="false" aria-controls="automation-faq-4">
                                            How does Lead Capture → Follow-up Automation work?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-4" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading4" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Leads captured from websites, landing pages, ads, or forms are automatically stored, tagged, and followed up through WhatsApp, email, or SMS. This ensures instant engagement and prevents lead leakage.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading5">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-5" aria-expanded="false" aria-controls="automation-faq-5">
                                            Can automation replace manual sales follow-ups?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-5" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading5" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Automation handles repetitive tasks like initial follow-ups, reminders, and notifications, while your sales team focuses on high-value conversations and closing deals, resulting in better productivity and faster conversions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading6">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-6" aria-expanded="false" aria-controls="automation-faq-6">
                                            What is Sales & Marketing Automation and why is it important?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-6" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading6" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Sales and marketing automation streamlines workflows like lead nurturing, campaign messaging, pipeline updates, and customer segmentation. It improves efficiency, consistency, and performance while reducing operational costs.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading7">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-7" aria-expanded="false" aria-controls="automation-faq-7">
                                            Do you provide API integrations with payment, CRM, and ERP systems?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-7" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading7" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Yes, we offer secure API integrations connecting payment gateways, CRM systems, ERP software, and other business tools, enabling real-time data syncing, automated transactions, and centralized reporting.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading8">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-8" aria-expanded="false" aria-controls="automation-faq-8">
                                            How do Zapier, Make, and n8n help in automation?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-8" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading8" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Zapier, Make, and n8n connect multiple apps and systems without manual work. They automate tasks such as lead syncing, notifications, order processing, and reporting, ensuring smooth and error-free workflows.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading9">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-9" aria-expanded="false" aria-controls="automation-faq-9">
                                            Are these automation workflows customizable and scalable?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-9" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading9" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            Absolutely. All workflows are fully customizable based on your business logic and can be scaled as your business grows, allowing you to add more tools, triggers, and automation steps anytime.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="automationFaqHeading10">
                                        <button className="accordion-button collapsed d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#automation-faq-10" aria-expanded="false" aria-controls="automation-faq-10">
                                            How do you monitor, optimize, and maintain automation systems?
                                        </button>
                                    </h2>
                                    <div id="automation-faq-10" className="accordion-collapse collapse" aria-labelledby="automationFaqHeading10" data-bs-parent="#automationFaqAccordion">
                                        <div className="accordion-body">
                                            We continuously monitor automation performance, fix errors, optimize workflows, and provide ongoing support to ensure your systems run smoothly, reliably, and deliver consistent business results.
                                        </div>
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

