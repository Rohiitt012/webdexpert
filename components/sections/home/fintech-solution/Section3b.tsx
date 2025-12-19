import Link from "next/link";

export default function Section3b() {
    return (
        <>
            {/*fintech-solution section 3b - What is Possible */}
            <section className="fintech-solution-section-3b position-relative py-120 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-dark mb-3 text-anime-style-2" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: '1.2' }}>
                            What is Possible?
                        </h2>
                        <p className="text-dark text-opacity-75 mb-5" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            CRM development that fits your business.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="10" y="10" width="40" height="30" rx="2" stroke="#333" strokeWidth="2"/>
                                            <line x1="15" y1="18" x2="45" y2="18" stroke="#333" strokeWidth="1.5"/>
                                            <line x1="15" y1="24" x2="45" y2="24" stroke="#333" strokeWidth="1.5"/>
                                            <line x1="15" y1="30" x2="35" y2="30" stroke="#333" strokeWidth="1.5"/>
                                            <circle cx="45" cy="32" r="8" fill="#FF6B35" fillOpacity="0.2"/>
                                            <path d="M42 32L45 35L48 32" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <text x="45" y="35" fontSize="8" fill="#FF6B35" textAnchor="middle">&lt;/&gt;</text>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Bespoke CRM Development</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    We will develop a bespoke CRM that meets all your unique needs perfectly. Let us know what is that you need, and we will build it from scratch.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 20L30 10L45 20V40L30 50L15 40V20Z" stroke="#333" strokeWidth="2" fill="none"/>
                                            <path d="M15 20L30 30L45 20" stroke="#333" strokeWidth="2"/>
                                            <path d="M30 30V50" stroke="#333" strokeWidth="2"/>
                                            <circle cx="30" cy="25" r="6" fill="#FF6B35" fillOpacity="0.2"/>
                                            <circle cx="25" cy="20" r="2" fill="#FF6B35"/>
                                            <circle cx="30" cy="20" r="2" fill="#FF6B35"/>
                                            <circle cx="35" cy="20" r="2" fill="#FF6B35"/>
                                            <circle cx="30" cy="25" r="2" fill="#FF6B35"/>
                                            <text x="30" y="28" fontSize="8" fill="#FF6B35" textAnchor="middle">&lt;/&gt;</text>
                                            <line x1="20" y1="35" x2="20" y2="45" stroke="#FF6B35" strokeWidth="2"/>
                                            <line x1="40" y1="35" x2="40" y2="45" stroke="#FF6B35" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>CRM Implementation Services</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    We will implement a CRM of your choice, migrate the data and ensure necessary integrations are in place.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="10" y="15" width="40" height="25" rx="2" stroke="#333" strokeWidth="2"/>
                                            <rect x="15" y="5" width="30" height="8" rx="1" stroke="#333" strokeWidth="1.5"/>
                                            <circle cx="20" cy="27" r="4" fill="#FF6B35" fillOpacity="0.3"/>
                                            <line x1="28" y1="25" x2="45" y2="25" stroke="#333" strokeWidth="1.5"/>
                                            <line x1="28" y1="30" x2="40" y2="30" stroke="#333" strokeWidth="1.5"/>
                                            <rect x="28" y="33" width="12" height="3" rx="1" fill="#FF6B35" fillOpacity="0.2"/>
                                            <rect x="28" y="37" width="12" height="3" rx="1" fill="#FF6B35" fillOpacity="0.2"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Our Own, Innovative CRM</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    We have been developing our own, unique CRM. With innovative features, it bridges the gap between bespoke CRM and implementation services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

