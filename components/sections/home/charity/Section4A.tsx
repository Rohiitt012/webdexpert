import Link from "next/link";

export default function Section4A() {
    return (
        <>
            {/* n8n Workflow Automation Features Section */}
            <section className="position-relative overflow-hidden bg-dark py-120">
                <div className="container">
                    {/* Feature 1: CRM Workflows */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay={0}>
                            <div className="position-relative">
                                <div className="number-step d-flex align-items-center gap-3 mb-3">
                                    <span className="btn-text text-warning">Make it yours</span>
                                </div>
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    CRM workflows that anyone <br />can work out
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    By leveraging the flexibility of n8n, businesses can extend the functionality of their CRM systems far beyond the limitations of standard offerings like HubSpot or Pipedrive, creating tailored solutions that address specific needs and enhance efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
                            <div className="position-relative">
                                <img className="w-100 rounded-4" src="/assets/img/placeholder-dark.png" alt="CRM Workflows" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Integration with Multiple Services */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="fade-left" data-aos-delay={0}>
                            <div className="position-relative">
                                <div className="number-step d-flex align-items-center gap-3 mb-3">
                                    <span className="btn-text text-warning">Integration with multiple services</span>
                                </div>
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    Connect to everything <br />quickly
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    n8n integrates with over 400 apps, including popular CRMs like Salesforce, HubSpot, and Zoho CRM, ensuring seamless data flow between your CRM and tools like marketing platforms and project management apps. With n8n's HTTP request node and webhook, you can connect to custom APIs and trigger workflows in real-time based on events like new leads or customer interactions, allowing for timely automated responses.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-delay={200}>
                            <div className="position-relative bg-white rounded-4 p-4">
                                <div className="row g-3">
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-google fs-30 text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-git fs-30 text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-envelope fs-30 text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-lightning fs-30 text-success"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-box fs-30 text-info"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-dropbox fs-30 text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-github fs-30"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-slack fs-30 text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-cloud fs-30 text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-database fs-30 text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-music-note fs-30 text-success"></i>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2">
                                        <div className="bg-light rounded-3 p-3 text-center">
                                            <i className="bi bi-reddit fs-30 text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Complex Workflow Automation */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay={0}>
                            <div className="position-relative">
                                <div className="number-step d-flex align-items-center gap-3 mb-3">
                                    <span className="btn-text text-warning">Complex workflow automation</span>
                                </div>
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    Customize multi-step <br />workflows efficiently
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    With n8n, you can create highly complex, multi-step workflows that are tailored to your specific business processes. This includes branching logic, conditional operations, and looping, which are often constrained in regular CRMs.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
                            <div className="position-relative bg-white rounded-4 p-5">
                                <div className="text-center">
                                    <div className="d-inline-block bg-light rounded-3 p-4 mb-4">
                                        <i className="bi bi-cursor fs-40 text-primary"></i>
                                        <p className="mb-0 mt-2 small">When clicking<br />"Execute<br />workflow"</p>
                                    </div>
                                    <div className="d-flex justify-content-center gap-3 mb-4">
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-database fs-30 text-info"></i>
                                            <p className="mb-0 mt-2 small">Postgres</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-hdd fs-30 text-danger"></i>
                                            <p className="mb-0 mt-2 small">Hubspot</p>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-3 p-4 mb-4">
                                        <i className="bi bi-arrows-collapse fs-30 text-success"></i>
                                        <p className="mb-0 mt-2 small">Compare<br />Datasets</p>
                                    </div>
                                    <div className="d-flex justify-content-center gap-3">
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-database fs-30 text-info"></i>
                                            <p className="mb-0 mt-2 small">Postgres</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-hdd fs-30 text-primary"></i>
                                            <p className="mb-0 mt-2 small">Hubspot</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-arrow-left-right fs-30 text-warning"></i>
                                            <p className="mb-0 mt-2 small">Merge</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4: Advanced Data Processing */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="fade-left" data-aos-delay={0}>
                            <div className="position-relative">
                                <div className="number-step d-flex align-items-center gap-3 mb-3">
                                    <span className="btn-text text-warning">Advanced data processing and transformation</span>
                                </div>
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    Transform and cleanse <br />incoming data
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    n8n enables you to perform complex data processing tasks, such as data enrichment, transformation, and cleansing before it enters the CRM. This ensures that the data in your CRM is accurate and actionable.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-delay={200}>
                            <div className="position-relative bg-white rounded-4 p-5">
                                <div className="text-center">
                                    <div className="d-flex justify-content-center gap-3 mb-4">
                                        <div className="bg-light rounded-3 p-3">
                                            <p className="mb-0 small">Input 1</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-3">
                                            <p className="mb-0 small">Input 2</p>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-3 p-4 mb-4">
                                        <i className="bi bi-filter fs-30 text-primary"></i>
                                        <p className="mb-0 mt-2 small">If</p>
                                        <div className="d-flex justify-content-around mt-3">
                                            <small className="text-success">true</small>
                                            <small className="text-danger">false</small>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center gap-3 mb-4">
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-arrow-left-right fs-30 text-info"></i>
                                            <p className="mb-0 mt-2 small">Merge<br />append</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-plus-square fs-30 text-warning"></i>
                                            <p className="mb-0 mt-2 small">Remove<br />Duplicates</p>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-3 p-4 mb-4">
                                        <i className="bi bi-arrow-repeat fs-30 text-success"></i>
                                        <p className="mb-0 mt-2 small">Loop Over Items</p>
                                    </div>
                                    <div className="bg-light rounded-3 p-4">
                                        <i className="bi bi-code-slash fs-30 text-danger"></i>
                                        <p className="mb-0 mt-2 small">Code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 5: User-Friendly Interface */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay={0}>
                            <div className="position-relative">
                                <div className="number-step d-flex align-items-center gap-3 mb-3">
                                    <span className="btn-text text-warning">User-friendly interface</span>
                                </div>
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    Empower other users to <br />create automations
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    n8n's visual interface makes it easy to design, test, and deploy workflows without the need for extensive coding knowledge, empowering users across different departments to create and manage automations.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
                            <div className="position-relative bg-white rounded-4 p-5">
                                <div className="text-center">
                                    <div className="d-flex justify-content-center gap-3 mb-4">
                                        <div className="bg-light rounded-3 p-3">
                                            <i className="bi bi-chat fs-30 text-primary"></i>
                                            <p className="mb-0 mt-2 small">When chat message<br />received</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-4">
                                            <i className="bi bi-robot fs-30 text-info"></i>
                                            <p className="mb-0 mt-2 small">AI Agent<br />Tools Agent</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                                        <div className="bg-light rounded-3 p-3">
                                            <i className="bi bi-cpu fs-30 text-success"></i>
                                            <p className="mb-0 mt-2 small">OpenAI Chat<br />Model</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-3">
                                            <i className="bi bi-window fs-30 text-warning"></i>
                                            <p className="mb-0 mt-2 small">Window Buffer<br />Memory</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-3">
                                            <i className="bi bi-calculator fs-30 text-danger"></i>
                                            <p className="mb-0 mt-2 small">Calculator</p>
                                        </div>
                                        <div className="bg-light rounded-3 p-3">
                                            <i className="bi bi-wikipedia fs-30 text-dark"></i>
                                            <p className="mb-0 mt-2 small">Wikipedia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 6: Community & Support */}
                    <div className="row align-items-center mb-120">
                        <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="fade-left" data-aos-delay={0}>
                            <div className="position-relative">
                                <div className="number-step d-flex align-items-center gap-3 mb-3">
                                    <span className="btn-text text-warning">Community & support</span>
                                </div>
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    Leverage community <br />expertise quickly
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    Tap into the expertise of an active 25K-strong builder community or dive into our extensive documentation to resolve your issues, fast. For more advanced support, customized SLAs are available, too.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-right" data-aos-delay={200}>
                            <div className="position-relative bg-white rounded-4 p-4">
                                <div className="list-group list-group-flush">
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bi bi-megaphone text-primary me-2"></i>
                                            <span className="fw-bold">Announcements</span>
                                        </div>
                                        <span className="badge bg-primary rounded-pill">48</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bi bi-question-circle text-info me-2"></i>
                                            <span className="fw-bold">Questions</span>
                                        </div>
                                        <span className="badge bg-info rounded-pill">9.5k</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bi bi-star text-warning me-2"></i>
                                            <span className="fw-bold">Feature Requests</span>
                                        </div>
                                        <span className="badge bg-warning rounded-pill">1.5k</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            <span className="fw-bold">Feature Requests (done)</span>
                                        </div>
                                        <span className="badge bg-success rounded-pill">191</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bi bi-rocket text-danger me-2"></i>
                                            <span className="fw-bold">Getting Started with n8n</span>
                                        </div>
                                        <span className="badge bg-danger rounded-pill">140</span>
                                    </div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bi bi-tools text-dark me-2"></i>
                                            <span className="fw-bold">Built with n8n</span>
                                        </div>
                                        <span className="badge bg-dark rounded-pill">85</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 7: n8n Execution Advantage */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right" data-aos-delay={0}>
                            <div className="position-relative">
                                <h2 className="text-warning mb-4 text-anime-style-2">
                                    n8n Execution Advantage
                                </h2>
                                <p className="text-white-50 mb-0 fs-18">
                                    n8n offers a unique pricing model that sets our platform apart as one of the most affordable and scalable options in the market. Unlike other platforms that charge per operation, step, or task, n8n charges only for full workflow executions. This approach guarantees predictable costs and scalability, no matter the complexity or volume of your workflows.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={200}>
                            <div className="position-relative bg-gradient rounded-4 p-5" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <div className="text-white">
                                            <h5 className="text-white mb-3">Other platforms</h5>
                                            <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-2">
                                                <i className="bi bi-at text-white"></i>
                                                <span className="text-white ms-2 small">Get info, data</span>
                                                <span className="badge bg-warning float-end">$</span>
                                            </div>
                                            <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-2">
                                                <i className="bi bi-envelope text-white"></i>
                                                <span className="text-white ms-2 small">Email notification</span>
                                                <span className="badge bg-warning float-end">$</span>
                                            </div>
                                            <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-2">
                                                <i className="bi bi-calendar text-white"></i>
                                                <span className="text-white ms-2 small">In 2-days</span>
                                                <span className="badge bg-warning float-end">$</span>
                                            </div>
                                            <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-2">
                                                <i className="bi bi-clock text-white"></i>
                                                <span className="text-white ms-2 small">Delays to 13:55</span>
                                                <span className="badge bg-warning float-end">$</span>
                                            </div>
                                            <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-2">
                                                <i className="bi bi-list-task text-white"></i>
                                                <span className="text-white ms-2 small">Create task</span>
                                                <span className="badge bg-warning float-end">$</span>
                                            </div>
                                            <div className="bg-white bg-opacity-10 rounded-3 p-3">
                                                <i className="bi bi-chat text-white"></i>
                                                <span className="text-white ms-2 small">Notify via Slack</span>
                                                <span className="badge bg-warning float-end">$</span>
                                            </div>
                                            <div className="text-center mt-3">
                                                <span className="badge bg-warning fs-18">6x $</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 text-center">
                                        <i className="bi bi-arrow-right text-white fs-40"></i>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="text-white">
                                            <h5 className="text-white mb-3 d-flex align-items-center">
                                                <svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                                                </svg>
                                                n8n
                                            </h5>
                                            <div className="bg-white rounded-4 p-4">
                                                <div className="d-flex justify-content-around mb-3">
                                                    <div className="text-center">
                                                        <i className="bi bi-at text-dark"></i>
                                                    </div>
                                                    <div className="text-center">
                                                        <i className="bi bi-envelope text-dark"></i>
                                                    </div>
                                                    <div className="text-center">
                                                        <i className="bi bi-calendar text-dark"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around">
                                                    <div className="text-center">
                                                        <i className="bi bi-clock text-dark"></i>
                                                    </div>
                                                    <div className="text-center">
                                                        <i className="bi bi-list-task text-dark"></i>
                                                    </div>
                                                    <div className="text-center">
                                                        <i className="bi bi-chat text-dark"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-3">
                                                <span className="badge bg-warning fs-18">1x $</span>
                                            </div>
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
