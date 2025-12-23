import Link from "next/link";

export default function Section3A() {
    return (
        <>
            {/*charity-home-section-3A - Automation & Integration Services Pricing*/}
            <section className="charity-home-section-3 pt-120 pb-120 position-relative z-0 overflow-hidden">
                <div className="container position-relative">
                    <div className="row">
                        <div className="number-step d-flex align-items-center gap-3">
                            <i className="fa-solid fa-heart text-primary" />
                            <span className="btn-text">automation services</span>
                        </div>
                        <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                            <h2 className="text-dark my-3 text-anime-style-3">
                                🤖 Automation & Integration Services — 
                                <span className="bg-white border border-dark rounded-5 px-2">Pricing</span>
                            </h2>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="row mt-80">
                        {/* WhatsApp Automation */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <h4>💬 WhatsApp Automation</h4>
                                    <p className="text-muted fs-7">(Chatbots, Flows & Broadcasts)</p>
                                    <h5 className="text-primary mt-3">Starting from ₹14,999 / month</h5>
                                </div>
                                <div className="line mb-4" />
                                <p className="fs-7 mb-4">Automate customer conversations to improve response time and lead conversions.</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✔ WhatsApp chatbot & flow setup</li>
                                    <li className="mb-2">✔ Automated replies & lead qualification</li>
                                    <li className="mb-2">✔ Broadcast & campaign setup</li>
                                    <li className="mb-2">✔ CRM / website integration</li>
                                    <li className="mb-2">✔ Monthly optimization</li>
                                </ul>
                                <Link href="#" className="btn btn-outline-secondary mt-3 w-100">
                                    <span>Automate WhatsApp</span>
                                </Link>
                            </div>
                        </div>

                        {/* Lead Capture → Follow-up Automation */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <h4>🔁 Lead Capture → Follow-up</h4>
                                    <p className="text-muted fs-7">Automation</p>
                                    <h5 className="text-primary mt-3">Starting from ₹11,999 (One-Time)</h5>
                                </div>
                                <div className="line mb-4" />
                                <p className="fs-7 mb-4">End-to-end automation to capture, nurture, and convert leads automatically.</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✔ Lead forms & webhook setup</li>
                                    <li className="mb-2">✔ Auto follow-ups (WhatsApp / Email)</li>
                                    <li className="mb-2">✔ CRM integration</li>
                                    <li className="mb-2">✔ Lead status & pipeline automation</li>
                                </ul>
                                <Link href="#" className="btn btn-outline-secondary mt-3 w-100">
                                    <span>Automate Lead Follow-ups</span>
                                </Link>
                            </div>
                        </div>

                        {/* Sales & Marketing Automation */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={400}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <h4>📈 Sales & Marketing</h4>
                                    <p className="text-muted fs-7">Automation</p>
                                    <h5 className="text-primary mt-3">Starting from ₹19,999 / month</h5>
                                </div>
                                <div className="line mb-4" />
                                <p className="fs-7 mb-4">Streamline your sales and marketing workflows for higher efficiency and ROI.</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✔ Funnel & workflow automation</li>
                                    <li className="mb-2">✔ Email & WhatsApp sequences</li>
                                    <li className="mb-2">✔ CRM & pipeline automation</li>
                                    <li className="mb-2">✔ Performance tracking & reports</li>
                                </ul>
                                <Link href="#" className="btn btn-outline-secondary mt-3 w-100">
                                    <span>Scale Sales Automation</span>
                                </Link>
                            </div>
                        </div>

                        {/* API Integrations */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={0}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <h4>🔗 API Integrations</h4>
                                    <p className="text-muted fs-7">(Payment, CRM, ERP)</p>
                                    <h5 className="text-primary mt-3">Starting from ₹9,999 (One-Time)</h5>
                                </div>
                                <div className="line mb-4" />
                                <p className="fs-7 mb-4">Seamless third-party integrations for smooth data flow across systems.</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✔ API integration & testing</li>
                                    <li className="mb-2">✔ Payment gateway integration</li>
                                    <li className="mb-2">✔ CRM / ERP data sync</li>
                                    <li className="mb-2">✔ Secure & scalable setup</li>
                                </ul>
                                <Link href="#" className="btn btn-outline-secondary mt-3 w-100">
                                    <span>Integrate Systems</span>
                                </Link>
                            </div>
                        </div>

                        {/* Workflow Automation */}
                        <div className="col-lg-4 col-md-6 card-feature mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="bg-white rounded-4 p-4 hover-up border border-white h-100">
                                <div className="mb-4">
                                    <h4>⚙️ Workflow Automation</h4>
                                    <p className="text-muted fs-7">(Zapier, Make, n8n)</p>
                                    <h5 className="text-primary mt-3">Starting from ₹7,999 (One-Time)</h5>
                                </div>
                                <div className="line mb-4" />
                                <p className="fs-7 mb-4">Automate repetitive tasks and connect your apps without manual work.</p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✔ Zap / scenario / workflow setup</li>
                                    <li className="mb-2">✔ Trigger-action logic</li>
                                    <li className="mb-2">✔ Error handling & testing</li>
                                    <li className="mb-2">✔ Documentation & handover</li>
                                </ul>
                                <Link href="#" className="btn btn-outline-secondary mt-3 w-100">
                                    <span>Build Smart Workflows</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services Comparison Table */}
                    <div className="row mt-80">
                        <div className="col-12">
                            <div className="number-step d-flex align-items-center gap-3 mb-4">
                                <i className="fa-solid fa-heart text-primary" />
                                <span className="btn-text">service comparison</span>
                            </div>
                            <h3 className="text-dark mb-5 text-anime-style-3">
                                📊 Automation Services 
                                <span className="bg-white border border-dark rounded-5 px-2">Comparison</span>
                            </h3>
                            <div className="bg-white rounded-4 p-4 border border-white">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Service</th>
                                                <th>Pricing Type</th>
                                                <th>Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>WhatsApp Automation</td>
                                                <td>Monthly</td>
                                                <td>Customer engagement</td>
                                            </tr>
                                            <tr>
                                                <td>Lead Follow-up Automation</td>
                                                <td>One-Time</td>
                                                <td>Lead conversion</td>
                                            </tr>
                                            <tr>
                                                <td>Sales & Marketing Automation</td>
                                                <td>Monthly</td>
                                                <td>Funnel scaling</td>
                                            </tr>
                                            <tr>
                                                <td>API Integrations</td>
                                                <td>One-Time</td>
                                                <td>System connectivity</td>
                                            </tr>
                                            <tr>
                                                <td>Workflow Automation</td>
                                                <td>One-Time</td>
                                                <td>Process automation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
