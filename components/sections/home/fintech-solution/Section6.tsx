import Link from "next/link";

export default function Section6({ pt }: any) {
    return (
        <>
            {/*fintech-solution section 6 - CRM Development & Support */}
            <section className={`fintech-solution-section-6 position-relative overflow-hidden py-120 bg-white ${pt}`}>
                <div className="container position-relative z-1">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#794AFF" fillOpacity="0.2"/>
                                            <path d="M20 30L25 35L40 20" stroke="#794AFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <rect x="15" y="15" width="30" height="30" rx="5" fill="#794AFF" fillOpacity="0.1"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-4" style={{ fontSize: '32px', fontWeight: 'bold' }}>CRM development</h3>
                                </div>
                                <div>
                                    <h6 className="text-dark mb-3" style={{ fontSize: '18px', fontWeight: '600' }}>What we do:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Implement all the planned functionality, be it CRM platform customization or building all CRM functional modules from scratch.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Set up APIs to integrate a CRM with other business systems.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Test the CRM's functionality, integration, compatibility, security, and usability.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                When the CRM's quality is validated, launch it live.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <Link href="#contact" className="text-primary fw-semibold" style={{ fontSize: '16px', textDecoration: 'none' }}>
                                        I'm interested →
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#794AFF" fillOpacity="0.2"/>
                                            <path d="M20 25C20 22.8 21.8 21 24 21H36C38.2 21 40 22.8 40 25V35C40 37.2 38.2 39 36 39H24C21.8 39 20 37.2 20 35V25Z" fill="#794AFF" fillOpacity="0.1"/>
                                            <path d="M25 30L28 33L35 26" stroke="#794AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="30" cy="30" r="12" fill="#794AFF" fillOpacity="0.1"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-4" style={{ fontSize: '32px', fontWeight: 'bold' }}>CRM support</h3>
                                </div>
                                <div>
                                    <h6 className="text-dark mb-3" style={{ fontSize: '18px', fontWeight: '600' }}>What we do:</h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Provide user training, answer user questions and concerns.
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-start mb-3 gap-3">
                                            <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                                <i className="bi bi-check-lg text-white fs-6"></i>
                                            </div>
                                            <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Upon demand, provide <Link href="#" className="text-primary text-decoration-underline">L1-L3 support services</Link>.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <Link href="#contact" className="text-primary fw-semibold" style={{ fontSize: '16px', textDecoration: 'none' }}>
                                        I'm interested →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
