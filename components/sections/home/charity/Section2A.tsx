import Link from "next/link";

export default function Section2A() {
    return (
        <>
            {/*charity-home-section-2A - Automation Features*/}
            <section className="charity-home-section-3 pt-120 pb-120 position-relative z-0 bg-white overflow-hidden">
                <div className="container position-relative">
                    {/* Hero Section */}
                    <div className="row text-center mb-80">
                        <div className="col-12">
                            <h1 className="text-dark mb-4" style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
                                Any system, any workflow. Connect faster with <br />
                                real-time data and action.
                            </h1>
                            <p className="fs-5 text-dark">
                                Close gaps between disconnected systems, scale faster, and speed agentic automation.
                            </p>
                        </div>
                    </div>

                    {/* Three Features Cards */}
                    <div className="row g-4 mb-120">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white rounded-4 p-5 h-100 border border-white">
                                <div className="mb-4">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="15" r="6" fill="#dc3545" />
                                        <circle cx="15" cy="45" r="6" fill="#dc3545" />
                                        <circle cx="45" cy="45" r="6" fill="#dc3545" />
                                        <line x1="30" y1="21" x2="20" y2="40" stroke="#dc3545" strokeWidth="3" />
                                        <line x1="30" y1="21" x2="40" y2="40" stroke="#dc3545" strokeWidth="3" />
                                    </svg>
                                </div>
                                <h4 className="mb-3">Connect quick to business apps with <strong>pre-built packages</strong></h4>
                                <p className="text-muted mb-0">
                                    Instantly unlock API- and UI-based development with a library of packaged actions across key business apps.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-white rounded-4 p-5 h-100 border border-white">
                                <div className="mb-4">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="10" y="15" width="15" height="15" rx="3" fill="none" stroke="#ff6600" strokeWidth="2" />
                                        <rect x="35" y="15" width="15" height="15" rx="3" fill="none" stroke="#ff6600" strokeWidth="2" />
                                        <rect x="10" y="35" width="15" height="15" rx="3" fill="none" stroke="#ff6600" strokeWidth="2" />
                                        <rect x="35" y="35" width="15" height="15" rx="3" fill="none" stroke="#ff6600" strokeWidth="2" />
                                        <rect x="22" y="25" width="6" height="1" fill="#ff6600" />
                                    </svg>
                                </div>
                                <h4 className="mb-3">Automate across systems with <strong>iPaaS integrations</strong></h4>
                                <p className="text-muted mb-0">
                                    Seamlessly orchestrate high-scale complex workflows with unlimited API connections.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-white rounded-4 p-5 h-100 border border-white">
                                <div className="mb-4">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="15" y="10" width="30" height="40" rx="4" fill="none" stroke="#ff6600" strokeWidth="2" />
                                        <rect x="20" y="15" width="7" height="3" rx="1" fill="#ff6600" />
                                        <rect x="20" y="22" width="20" height="2" rx="1" fill="#ff6600" />
                                        <rect x="20" y="28" width="20" height="2" rx="1" fill="#ff6600" />
                                        <rect x="20" y="34" width="15" height="2" rx="1" fill="#ff6600" />
                                    </svg>
                                </div>
                                <h4 className="mb-3">Speed automation with <strong className="text-warning">Cloud Service</strong></h4>
                                <p className="text-muted mb-0">
                                    Deliver instant action and data in the cloud for fast and flexible agentic automation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pre-built Packages Section */}
                    <div className="row mb-120">
                        <div className="col-12 text-center mb-5">
                            <div className="d-inline-block mb-3" style={{ borderTop: "3px solid #ff6600", width: "150px" }}></div>
                            <h6 className="text-uppercase text-muted mb-4">FEATURED PACKAGE</h6>
                            <h2 className="text-dark mb-5" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                                Get automating fast with pre-built packages for top apps.
                            </h2>
                            <p className="fs-6 text-muted mb-5">
                                Facilitate development with an out-of-the-box library of command packages for business apps your teams use. Simply drag and drop into your automation workflows.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="bg-white rounded-4 p-5 border border-light" data-aos="fade-up">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 text-center mb-lg-0 mb-4">
                                        <div className="d-inline-block p-4 rounded-3" style={{ backgroundColor: "#5f9ea0" }}>
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40 10 L50 30 L30 30 Z M40 30 L50 50 L30 50 Z M40 50 L50 70 L30 70 Z" fill="white" opacity="0.9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mb-lg-0 mb-4">
                                        <h3 className="mb-3">OpenAI connected package</h3>
                                        <p className="text-muted mb-0">
                                            Solve real-world problems by integrating tools like ChatGPT in your automation workflows. This smart, easy-to-put-together conversational AI system saves time and resources, increases efficiency, and improves customer experience.
                                        </p>
                                    </div>
                                    <div className="col-lg-3 text-lg-end text-center">
                                        <Link href="#" className="btn btn-lg" style={{ backgroundColor: "#ff6600", color: "white", borderRadius: "50px", padding: "15px 30px" }}>
                                            <span>View the OpenAI package</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cloud Service Section with Image */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 mb-lg-0 mb-5" data-aos="fade-right">
                            <h2 className="text-dark mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                                Get your data with zero delay. Cloud Service delivers wait-less automation.
                            </h2>
                            <p className="fs-6 text-muted mb-5">
                                Run automations entirely in the cloud, integrated with SaaS apps and API endpoints—no infrastructure required.
                            </p>

                            {/* Features Grid */}
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="15" r="8" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <path d="M15 20 L20 25 L25 20" stroke="#ff6600" strokeWidth="2" fill="none" />
                                                <line x1="12" y1="30" x2="28" y2="30" stroke="#ff6600" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Connect seamlessly</h5>
                                            <p className="text-muted mb-0 fs-7">Integrate with apps like SAP, Salesforce, ServiceNow, Workday and more. Connect easily with open standards like REST and SOAP.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="10" y="12" width="12" height="8" rx="2" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <text x="16" y="19" fontSize="8" fill="#ff6600" textAnchor="middle">AI</text>
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Easily add AI</h5>
                                            <p className="text-muted mb-0 fs-7">Use pre-built GenAI integration packages for OpenAI, Microsoft, Google, Amazon, and also integrate custom models for faster innovation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="15" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <circle cx="10" cy="10" r="3" fill="#ff6600" />
                                                <circle cx="30" cy="10" r="3" fill="#ff6600" />
                                                <circle cx="10" cy="30" r="3" fill="#ff6600" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Any time. Anywhere.</h5>
                                            <p className="text-muted mb-0 fs-7">Trigger automations on demand or schedule them to run in the flow of work, including forms, processes, or direct endpoints.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg">
                                    <img src="/assets/img/charity-img/pages/charity/page-home/home-section-2/img-1.png" alt="Automation Workflow" className="w-100" />
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: "120px", height: "120px" }}>
                                            <div className="text-center text-white">
                                                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Drag-and-</div>
                                                <div style={{ fontSize: "0.9rem", fontWeight: "bold" }}>drop APIs</div>
                                                <div style={{ fontSize: "0.8rem" }}>into your</div>
                                                <div style={{ fontSize: "0.8rem" }}>processes</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Build and Orchestrate Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2 mb-lg-0 mb-5" data-aos="fade-left">
                            <h2 className="text-dark mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                                Build and orchestrate workflows all in one place.
                            </h2>
                            <p className="fs-6 text-dark mb-4">
                                Easily drag and drop automations, integrations, and human-in-the-loop actions, all in a single visual interface — <strong className="text-warning">no code</strong> required.
                            </p>

                            {/* Features Grid */}
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="8" y="8" width="10" height="10" rx="2" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <rect x="8" y="22" width="10" height="10" rx="2" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <rect x="22" y="15" width="10" height="10" rx="2" fill="none" stroke="#ff6600" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Optimize complex workflows</h5>
                                            <p className="text-muted mb-0 fs-7">Simplify operations across functions by automating multi-user, multi-step tasks and approvals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="15" cy="20" r="6" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <circle cx="25" cy="20" r="6" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <path d="M20 15 L20 10" stroke="#ff6600" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Empower employee experience</h5>
                                            <p className="text-muted mb-0 fs-7">Smooth processes by bridging automated tasks, connecting APIs, and adding human-in-the-loop as needed.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="8" y="15" width="6" height="15" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <rect x="17" y="10" width="6" height="20" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <rect x="26" y="12" width="6" height="18" fill="none" stroke="#ff6600" strokeWidth="2" />
                                                <path d="M30 8 L32 6" stroke="#ff6600" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Boost operational productivity</h5>
                                            <p className="text-muted mb-0 fs-7">Decrease time between tasks, enforce service level agreements, and alert teams promptly within their app of choice.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                            <div className="position-relative">
                                <div className="rounded-4 overflow-hidden border border-light shadow-lg">
                                    <img src="/assets/img/charity-img/pages/charity/page-home/home-section-2/img-2.png" alt="Workflow Builder" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
