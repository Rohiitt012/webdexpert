import Link from "next/link";

export default function Section3b() {
    return (
        <>
            {/*fintech-solution section 3b - What is Possible */}
            <section className="fintech-solution-section-3b position-relative overflow-hidden py-120 bg-white">
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
                                            <rect x="10" y="15" width="40" height="30" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
                                            <line x1="15" y1="20" x2="45" y2="20" stroke="#333" strokeWidth="1"/>
                                            <line x1="15" y1="25" x2="45" y2="25" stroke="#333" strokeWidth="1"/>
                                            <line x1="15" y1="30" x2="35" y2="30" stroke="#333" strokeWidth="1"/>
                                            <circle cx="45" cy="35" r="8" fill="#FF6B35" fillOpacity="0.2"/>
                                            <path d="M42 35L45 32L48 35L45 38Z" fill="#FF6B35"/>
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
                                            <circle cx="30" cy="30" r="8" fill="#FF6B35" fillOpacity="0.2"/>
                                            <circle cx="25" cy="25" r="2" fill="#333"/>
                                            <circle cx="30" cy="25" r="2" fill="#333"/>
                                            <circle cx="35" cy="25" r="2" fill="#333"/>
                                            <circle cx="30" cy="30" r="2" fill="#FF6B35"/>
                                            <path d="M20 35L25 30L30 35L35 30L40 35" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
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
                                            <rect x="10" y="15" width="40" height="30" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
                                            <line x1="15" y1="20" x2="45" y2="20" stroke="#333" strokeWidth="1"/>
                                            <line x1="15" y1="25" x2="45" y2="25" stroke="#333" strokeWidth="1"/>
                                            <line x1="15" y1="30" x2="35" y2="30" stroke="#333" strokeWidth="1"/>
                                            <circle cx="20" cy="35" r="5" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="1"/>
                                            <line x1="25" y1="30" x2="40" y2="30" stroke="#333" strokeWidth="1"/>
                                            <line x1="25" y1="35" x2="40" y2="35" stroke="#333" strokeWidth="1"/>
                                            <line x1="25" y1="40" x2="40" y2="40" stroke="#333" strokeWidth="1"/>
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

