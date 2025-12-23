import Link from "next/link";

export default function Section1A() {
    return (
        <>
            {/*charity-home-section-1A - Services Details*/}
            <section className="charity-home-section-3 pt-120 pb-120 position-relative z-0 bg-white overflow-hidden">
                <div className="container position-relative">

                    {/* Service 1 - WhatsApp Automation (Image Left, Text Right) */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 mb-lg-0 mb-5" data-aos="fade-right">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg p-5 bg-white d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                                    <div className="text-center">
                                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="50" fill="#0d6efd" opacity="0.1" />
                                            <path d="M60 20C37 20 18 37 18 58C18 65 20 71 23 76L20 100L45 97C50 99 55 100 60 100C83 100 102 83 102 58C102 37 83 20 60 20Z" fill="#0d6efd" />
                                            <path d="M45 70L48 55L52 58L55 48L65 58L68 48L72 58L75 55L78 70" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="42" cy="45" r="4" fill="white" />
                                            <circle cx="60" cy="40" r="4" fill="white" />
                                            <circle cx="78" cy="45" r="4" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h2 className="text-dark mb-4">
                                💬 WhatsApp Automation <br />
                                <span className="fs-5 text-muted">(Chatbots, Flows & Broadcasts)</span>
                            </h2>
                            <p className="fs-6 text-muted">
                                We build advanced WhatsApp automation solutions that help businesses respond instantly, manage high volumes of conversations, and improve customer engagement. Our chatbots and automated flows handle inquiries, qualify leads, send follow-ups, and run broadcast campaigns using the official WhatsApp Business API. This ensures faster communication, better customer experience, and higher conversion rates without increasing manual workload.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 - Lead Capture (Image Right, Text Left) */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 order-lg-2 mb-lg-0 mb-5" data-aos="fade-left">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg p-5 bg-white d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                                    <div className="text-center">
                                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="50" fill="#dc3545" opacity="0.1" />
                                            <path d="M30 50 L50 70 L90 30" stroke="#dc3545" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="60" cy="60" r="45" stroke="#dc3545" strokeWidth="4" fill="none" />
                                            <path d="M85 75 L100 90 M100 75 L85 90" stroke="#dc3545" strokeWidth="4" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                            <h2 className="text-dark mb-4">
                                🔁 Lead Capture → Follow-up Automation
                            </h2>
                            <p className="fs-6 text-muted">
                                We automate the complete lead management process by capturing leads from websites, landing pages, ads, and forms, and instantly triggering personalized follow-ups. Leads are automatically routed to WhatsApp, email, or CRM systems, ensuring timely responses, structured nurturing, and improved conversion performance while eliminating manual follow-up gaps.
                            </p>
                        </div>
                    </div>

                    {/* Service 3 - Sales & Marketing (Image Left, Text Right) */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 mb-lg-0 mb-5" data-aos="fade-right">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg p-5 bg-white d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                                    <div className="text-center">
                                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="50" fill="#198754" opacity="0.1" />
                                            <path d="M30 80 L40 60 L50 70 L65 45 L75 55 L90 35" stroke="#198754" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="40" cy="60" r="4" fill="#198754" />
                                            <circle cx="50" cy="70" r="4" fill="#198754" />
                                            <circle cx="65" cy="45" r="4" fill="#198754" />
                                            <circle cx="75" cy="55" r="4" fill="#198754" />
                                            <circle cx="90" cy="35" r="4" fill="#198754" />
                                            <path d="M85 30 L95 25 L90 35" fill="#198754" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h2 className="text-dark mb-4">
                                📈 Sales & Marketing Automation
                            </h2>
                            <p className="fs-6 text-muted">
                                We design smart sales and marketing automation systems that streamline your entire funnel—from lead nurturing to deal closure. By automating follow-ups, campaigns, pipelines, and customer journeys, we help your team save time, reduce operational effort, and consistently convert more prospects into paying customers.
                            </p>
                        </div>
                    </div>

                    {/* Service 4 - API Integrations (Image Right, Text Left) */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 order-lg-2 mb-lg-0 mb-5" data-aos="fade-left">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg p-5 bg-white d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                                    <div className="text-center">
                                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="50" fill="#fd7e14" opacity="0.1" />
                                            <circle cx="35" cy="40" r="12" stroke="#fd7e14" strokeWidth="4" fill="none" />
                                            <circle cx="85" cy="40" r="12" stroke="#fd7e14" strokeWidth="4" fill="none" />
                                            <circle cx="60" cy="80" r="12" stroke="#fd7e14" strokeWidth="4" fill="none" />
                                            <line x1="44" y1="46" x2="56" y2="74" stroke="#fd7e14" strokeWidth="4" />
                                            <line x1="76" y1="46" x2="64" y2="74" stroke="#fd7e14" strokeWidth="4" />
                                            <line x1="47" y1="40" x2="73" y2="40" stroke="#fd7e14" strokeWidth="4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                            <h2 className="text-dark mb-4">
                                🔗 API Integrations <br />
                                <span className="fs-5 text-muted">(Payment, CRM, ERP)</span>
                            </h2>
                            <p className="fs-6 text-muted">
                                We develop secure and scalable API integrations to connect your website, payment gateways, CRM, and ERP systems. This allows real-time data synchronization, automated actions, and smooth communication between platforms, helping businesses operate efficiently with accurate and centralized data across all systems.
                            </p>
                        </div>
                    </div>

                    {/* Service 5 - Workflow Automation (Image Left, Text Right) */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-0 mb-5" data-aos="fade-right">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg p-5 bg-white d-flex align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                                    <div className="text-center">
                                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="60" cy="60" r="50" fill="#6c757d" opacity="0.1" />
                                            <rect x="25" y="25" width="20" height="20" rx="4" fill="#6c757d" />
                                            <rect x="75" y="25" width="20" height="20" rx="4" fill="#6c757d" />
                                            <rect x="25" y="75" width="20" height="20" rx="4" fill="#6c757d" />
                                            <rect x="75" y="75" width="20" height="20" rx="4" fill="#6c757d" />
                                            <rect x="50" y="50" width="20" height="20" rx="4" fill="#6c757d" />
                                            <line x1="45" y1="35" x2="55" y2="55" stroke="#6c757d" strokeWidth="3" />
                                            <line x1="75" y1="45" x2="65" y2="55" stroke="#6c757d" strokeWidth="3" />
                                            <line x1="55" y1="65" x2="40" y2="80" stroke="#6c757d" strokeWidth="3" />
                                            <line x1="65" y1="65" x2="80" y2="80" stroke="#6c757d" strokeWidth="3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h2 className="text-dark mb-4">
                                ⚙️ Zapier, Make, n8n Workflow Automation <br />
                                <span className="fs-5 text-muted">(Zapier, Make & n8n)</span>
                            </h2>
                            <p className="fs-6 text-muted">
                                We create powerful workflow automations using tools like Zapier, Make, and n8n to connect multiple applications and automate repetitive tasks. From data syncing and notifications to complex multi-step processes, our workflows reduce manual work, minimize errors, and ensure your business operations run smoothly and efficiently.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
