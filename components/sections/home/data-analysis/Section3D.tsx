import Link from "next/link";

export default function Section3D() {
    return (
        <>
            {/*data-analysis home section 3d - Pricing Plans*/}
            <section className="data-analysis-home-section-3d position-relative overflow-hidden pb-80 pt-80 bg-secondary-2">
                <div className="container position-relative z-1">
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <h2 className="text-dark my-3 text-anime-style-2 mb-3">
                                Pick the plan that's right for you
                            </h2>
                            <p className="mx-auto" style={{ fontSize: '18px', lineHeight: '1.75', color: '#4a4a4a', maxWidth: '600px' }}>
                                Manage all of your social media in one place.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center g-lg-5 g-4 mt-3">
                        {/* Standard Plan */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="card-provide hover-up rounded-3 p-lg-7 p-md-5 p-4 bg-white h-100 border" style={{ borderColor: '#e9e9e9' }}>
                                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Standard
                                </h4>
                                <div className="mb-4">
                                    <span className="fs-2 fw-bold text-dark">₹2,600</span>
                                    <span className="text-muted ms-2">per user/mo*</span>
                                </div>
                                <button className="btn w-100 mb-3 py-2 rounded-pill" style={{ backgroundColor: '#000', color: '#fff', border: 'none' }}>
                                    Free 30-day trial
                                </button>
                                <p className="text-center mb-4">
                                    <Link href="#" className="text-decoration-underline text-dark" style={{ fontSize: '14px' }}>
                                        Skip trial, get 10% off*
                                    </Link>
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Up to 10 social accounts</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Unlimited post scheduling</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Best time to post recommendations</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>AI assistant with image and caption generator</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Canva and Adobe Express templates</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>One inbox for all social accounts</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>DM automations</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Search the past 7 days for brand and competitor mentions</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Analyze brand and competitor sentiment</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Benchmark against 5 competitors</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Assign DMs to teammates**</span>
                                    </li>
                                    <li className="mb-0">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a', fontStyle: 'italic' }}>...and much more!</span>
                                    </li>
                                </ul>
                                <div className="mt-4 pt-4 border-top">
                                    <Link href="#" className="link text-uppercase btn-text fw-bold" style={{ color: '#FFB700' }}>
                                        Learn more about Standard →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Plan - Most Popular */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="card-provide hover-up rounded-3 p-lg-7 p-md-5 p-4 h-100 border position-relative" style={{ backgroundColor: '#000', borderColor: '#FFB700', borderWidth: '1px' }}>
                                <div className="position-absolute top-0 start-50 translate-middle-x" style={{ backgroundColor: '#FFB700', color: '#000', padding: '4px 16px', borderRadius: '0 0 4px 4px', fontSize: '12px', fontWeight: '700' }}>
                                    Most popular
                                </div>
                                <div className="mt-3">
                                    <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#FFB700' }}>
                                        Advanced
                                    </h4>
                                    <div className="mb-4">
                                        <span className="fs-2 fw-bold text-white">₹10,500</span>
                                        <span className="text-white-50 ms-2">per user/mo*</span>
                                    </div>
                                    <button className="btn w-100 mb-3 py-2 rounded-pill" style={{ backgroundColor: '#FFB700', color: '#000', border: 'none', fontWeight: '600' }}>
                                        Free 30-day trial
                                    </button>
                                    <p className="text-center mb-4">
                                        <Link href="#" className="text-decoration-underline text-white" style={{ fontSize: '14px' }}>
                                            Skip trial, get 10% off*
                                        </Link>
                                    </p>
                                    <p className="mb-3 fw-bold" style={{ fontSize: '16px', color: '#fff' }}>
                                        Everything in Standard, PLUS:
                                    </p>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Unlimited social accounts</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Customizable analytics reports and templates</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Saved message replies and auto-responses</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Team approval workflows**</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Bulk schedule up to 350 posts at once</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Auto-route and tag messages</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Benchmark against 20 competitors</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Export, email, and schedule reports</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Inbox reporting and analytics</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Search the past 30 days for brand and competitor mentions</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Outbound post tagging and reporting</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span style={{ fontSize: '16px', color: '#fff' }}>Custom user access permissions**</span>
                                        </li>
                                        <li className="mb-0">
                                            <span style={{ fontSize: '16px', color: '#fff', fontStyle: 'italic' }}>...and much more!</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                                        <Link href="#" className="link text-uppercase btn-text fw-bold" style={{ color: '#FFB700' }}>
                                            Learn more about Advanced →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise Custom Plan */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="card-provide hover-up rounded-3 p-lg-7 p-md-5 p-4 bg-white h-100 border" style={{ borderColor: '#e9e9e9' }}>
                                <h4 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Enterprise Custom
                                </h4>
                                <div className="mb-4">
                                    <span className="fs-5 fw-bold text-dark">Custom Pricing</span>
                                </div>
                                <button className="btn w-100 mb-3 py-2 rounded-pill" style={{ backgroundColor: '#000', color: '#fff', border: 'none' }}>
                                    Request a Demo
                                </button>
                                <p className="mb-3 fw-bold" style={{ fontSize: '16px', color: '#1a1a1a' }}>
                                    Everything in Advanced, PLUS:
                                </p>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>A fully customized plan to maximize your investment</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Add as many users as you need</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Exclusive access to our most powerful tools</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Enterprise customer support</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Single sign-on (SSO)</span>
                                    </li>
                                </ul>
                                <div className="mt-4 pt-4 border-top">
                                    <h6 className="mb-4 fw-bold" style={{ fontSize: '18px', color: '#1a1a1a' }}>
                                        Maximize performance with:
                                    </h6>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Employee Advocacy (Amplify)</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Listening powered by Talkwalker</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Advanced Analytics</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Advanced Inbox</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Generative AI Chatbot</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Review Management</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Premier Services</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Social Selling</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Salesforce integration</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-start">
                                            <span className="me-2" style={{ fontSize: '18px', color: '#000' }}>+</span>
                                            <span style={{ fontSize: '16px', color: '#4a4a4a' }}>Compliance integration (Proofpoint)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4 pt-4 border-top">
                                    <Link href="#" className="link text-uppercase btn-text fw-bold" style={{ color: '#FFB700' }}>
                                        Learn more about Enterprise →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="d-inline-block p-3 rounded-3 border" style={{ backgroundColor: '#fffbe6', borderColor: '#FFB700', maxWidth: '900px' }}>
                                <p className="mb-0" style={{ fontSize: '14px', color: '#4a4a4a' }}>
                                    📌 <span className="fst-italic fw-bold">Pricing Disclaimer:</span> Prices displayed in INR, based on monthly billing, but do not include applicable taxes. Skip trial discount only applies when you pay annually.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

