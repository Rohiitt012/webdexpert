import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*fintech-solution section 9 - CRM Benefits Continued */}
            <section className="fintech-solution-section-9 position-relative overflow-hidden py-120 bg-light-2">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#FF6B35" fillOpacity="0.2"/>
                                            <path d="M25 20L30 15L35 20L30 25Z" fill="#FF6B35" fillOpacity="0.3"/>
                                            <rect x="20" y="30" width="20" height="15" rx="2" fill="#FF6B35" fillOpacity="0.2"/>
                                            <path d="M25 35L30 30L35 35" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Ownership</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    If you have a fully custom CRM, you can grow your team without thinking of skyrocketing subscription fees.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#FF6B35" fillOpacity="0.2"/>
                                            <rect x="15" y="25" width="20" height="20" rx="2" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="2"/>
                                            <rect x="20" y="20" width="20" height="20" rx="2" fill="none" stroke="#FF6B35" strokeWidth="2" strokeDasharray="4 4"/>
                                            <path d="M20 20L35 35" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Scalability</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    Get new features when you need them, not when a vendor decides to upgrade the platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

