import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*fintech-solution section 5 - CRM Development Process */}
            <section className="fintech-solution-section-5 position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    <div className="text-center mb-80">
                        <h2 className="text-dark my-3 text-anime-style-2" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: '1.2' }}>
                            Our Custom CRM Development Process: Well-Organized and Fast
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#794AFF" fillOpacity="0.2"/>
                                            <path d="M25 20L30 25L35 20" stroke="#794AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M25 30L30 35L35 30" stroke="#794AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="20" cy="15" r="3" fill="#794AFF"/>
                                            <circle cx="40" cy="25" r="3" fill="#794AFF"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold' }}>Discovery</h3>
                                </div>
                                <div>
                                    <h6 className="text-dark mb-3" style={{ fontSize: '18px', fontWeight: '600' }}>What we do:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Analyze your current processes that a CRM will cover: the scope of manual work, inconveniences, time-consuming activities.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Spot process optimization opportunities.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Elicit requirements for your CRM via interviews and business process analysis.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Identify external and internal data sources your CRM will be connected to.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Get to know future CRM users: their role hierarchy and needs.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#794AFF" fillOpacity="0.2"/>
                                            <path d="M20 25L25 30L30 25L35 30L40 25" stroke="#794AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="20" cy="20" r="8" fill="#FFD700" fillOpacity="0.3"/>
                                            <circle cx="40" cy="35" r="8" fill="#794AFF" fillOpacity="0.3"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-4" style={{ fontSize: '28px', fontWeight: 'bold' }}>CRM concept design</h3>
                                </div>
                                <div>
                                    <h6 className="text-dark mb-3" style={{ fontSize: '18px', fontWeight: '600' }}>What we do:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Create usage scenarios for different CRM user roles.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Plan a functional specification.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Create an integration plan.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Document CRM architecture detailing optimal programming tools and technologies for all the components.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Estimate project timeline and cost.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
