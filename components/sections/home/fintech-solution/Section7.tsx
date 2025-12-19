import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*fintech-solution section 7 - Custom CRM Solutions Case Studies */}
            <section className="fintech-solution-section-7 position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    <div className="mb-5">
                        <h2 className="text-dark mb-3 text-anime-style-2" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: '1.2' }}>
                            Custom CRM Solutions Built by WEBDEXPERT
                        </h2>
                        <p className="text-dark text-opacity-75 mb-4" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            Explore our CRM Development case studies, showcasing the impact of our tailored solutions. Use the filters to browse projects by <strong>industry</strong> and find the most relevant examples for your needs.
                        </p>
                        <div className="d-flex align-items-center gap-3 mb-5">
                            <span className="text-dark fw-semibold" style={{ fontSize: '16px' }}>Filter by:</span>
                            <div className="dropdown">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '16px', padding: '8px 16px' }}>
                                    Industries
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Healthcare</Link></li>
                                    <li><Link className="dropdown-item" href="#">Logistics</Link></li>
                                    <li><Link className="dropdown-item" href="#">Software</Link></li>
                                    <li><Link className="dropdown-item" href="#">All Industries</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Case Study 1 */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-6 position-relative">
                                        <div className="position-relative h-100" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                            <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-1.png" alt="Telehealth Platform" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.8 }} />
                                            <div className="position-absolute top-0 start-0 p-3">
                                                <span className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: '14px' }}>Case Study</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 bg-warning-subtle d-flex align-items-center">
                                        <div className="card-body p-4">
                                            <h4 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.3' }}>
                                                HIPAA-Compliant Provider-to-Provider Telehealth Platform for Scalable Behavioral Care Delivery
                                            </h4>
                                            <p className="text-dark mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                WEBDEXPERT is building a Microsoft-based telehealth platform for a leading behavioral health provider. Using low-code tools and pre-built integrations, core workflows were transitioned in 4 months. Full rollout is projected to cut manual coordination by 40%.
                                            </p>
                                            <Link href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">
                                                Project details →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Case Study 2 */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-6 position-relative">
                                        <div className="position-relative h-100" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                            <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-2.png" alt="Saudia Cargo" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.8 }} />
                                            <div className="position-absolute top-0 start-0 p-3">
                                                <span className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: '14px' }}>Case Study</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 bg-info-subtle d-flex align-items-center">
                                        <div className="card-body p-4">
                                            <h4 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.3' }}>
                                                Dynamics 365 CRM for Saudia Cargo, Saudi Arabia's Flagship Airfreight Carrier
                                            </h4>
                                            <p className="text-dark mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                WEBDEXPERT implemented and customized Dynamics 365 Sales, Dynamics 365 Customer Voice, and Dynamics 365 Customer Service. With a comprehensive sales and customer service automation environment, Saudia Cargo benefits from 30% faster service processes.
                                            </p>
                                            <Link href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">
                                                Project details →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Case Study 3 */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-6 position-relative">
                                        <div className="position-relative h-100" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                            <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-3.png" alt="Healthcare Advisory" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.8 }} />
                                            <div className="position-absolute top-0 start-0 p-3">
                                                <span className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: '14px' }}>Case Study</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 bg-purple-subtle d-flex align-items-center">
                                        <div className="card-body p-4">
                                            <h4 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.3' }}>
                                                Microsoft Dynamics 365 CRM for a Healthcare Advisory Company
                                            </h4>
                                            <p className="text-dark mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                WEBDEXPERT used Dynamics 365 Sales, Marketing and Customer Voice, Power Apps and numerous third-party systems to build a comprehensive CRM ecosystem for a healthcare advisory company.
                                            </p>
                                            <Link href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">
                                                Project details →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Case Study 4 */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-6 position-relative">
                                        <div className="position-relative h-100" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                                            <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-4.png" alt="Marketing Software" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.8 }} />
                                            <div className="position-absolute top-0 start-0 p-3">
                                                <span className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: '14px' }}>Case Study</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 bg-success-subtle d-flex align-items-center">
                                        <div className="card-body p-4">
                                            <h4 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.3' }}>
                                                Marketing Software That Helps Reach 100% Assisted Livings Occupancy
                                            </h4>
                                            <p className="text-dark mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                WEBDEXPERT created the marketing module for assisted livings to allow them handle prospects effectively, track communications with them, and set task reminders.
                                            </p>
                                            <Link href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">
                                                Project details →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Case Study 5 */}
                        <div className="col-lg-6">
                            <div className="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="row g-0 h-100">
                                    <div className="col-md-6 position-relative">
                                        <div className="position-relative h-100" style={{ minHeight: '300px', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                                            <img src="/assets/img/fintech-solution-img/pages/fintech-solution/page-home/home-section-7/img-5.png" alt="Dynamics 365 CRM" className="w-100 h-100 object-fit-cover" style={{ opacity: 0.8 }} />
                                            <div className="position-absolute top-0 start-0 p-3">
                                                <span className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: '14px' }}>Case Study</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 bg-warning-subtle d-flex align-items-center">
                                        <div className="card-body p-4">
                                            <h4 className="text-dark mb-3" style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.3' }}>
                                                Dynamics 365 CRM Heavily Customized to Sell Engineering Software
                                            </h4>
                                            <p className="text-dark mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                WEBDEXPERT created a CRM customized to sell sophisticated software products and enhanced with two narrowly specific functional modules.
                                            </p>
                                            <Link href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">
                                                Project details →
                                            </Link>
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
