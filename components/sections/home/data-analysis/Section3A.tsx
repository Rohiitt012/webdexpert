import Link from "next/link";

export default function Section3A() {
    return (
        <>
            {/*data-analysis section 3a - AI Done Right*/}
            <section className="data-analysis-home-section-3a position-relative overflow-hidden py-80 bg-white">
                <div className="container position-relative z-1">
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <h2 className="text-dark text-anime-style-2" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a1a' }}>
                                The Foundation Behind Our Powerful AI Solutions
                            </h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        {/* Humans at the center */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
                            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
                                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="28" stroke="#007bff" strokeWidth="2" fill="none" />
                                        <circle cx="30" cy="20" r="6" fill="#007bff" />
                                        <path d="M15 45 Q15 35 30 35 Q45 35 45 45" stroke="#007bff" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Humans at the center.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Ensures meaningful collaboration with AI that amplifies human potential.
                                </p>
                            </div>
                        </div>

                        {/* Value-centric innovation */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
                                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <path d="M30 5 L35 25 L55 25 L38 37 L43 57 L30 45 L17 57 L22 37 L5 25 L25 25 Z" stroke="#007bff" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Value-centric innovation.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Delivers rapid, measurable ROI shaped by real business needs and continuous customer feedback.
                                </p>
                            </div>
                        </div>

                        {/* Unrivaled data and context */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
                                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="20" stroke="#007bff" strokeWidth="2" fill="none" />
                                        <circle cx="20" cy="20" r="3" fill="#007bff" />
                                        <circle cx="30" cy="15" r="3" fill="#007bff" />
                                        <circle cx="40" cy="20" r="3" fill="#007bff" />
                                        <circle cx="25" cy="35" r="3" fill="#007bff" />
                                        <circle cx="35" cy="35" r="3" fill="#007bff" />
                                        <line x1="20" y1="20" x2="25" y2="35" stroke="#007bff" strokeWidth="1.5" />
                                        <line x1="30" y1="15" x2="25" y2="35" stroke="#007bff" strokeWidth="1.5" />
                                        <line x1="30" y1="15" x2="35" y2="35" stroke="#007bff" strokeWidth="1.5" />
                                        <line x1="40" y1="20" x2="35" y2="35" stroke="#007bff" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Unrivaled data and context.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Provides confidence in the accuracy and relevance of AI outputs.
                                </p>
                            </div>
                        </div>

                        {/* Open, extensible platform */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
                                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <path d="M20 20 L30 10 L40 20 L40 30 L30 40 L20 30 Z" stroke="#007bff" strokeWidth="2" fill="none" />
                                        <circle cx="25" cy="25" r="2" fill="#007bff" />
                                        <circle cx="30" cy="30" r="2" fill="#007bff" />
                                        <circle cx="35" cy="25" r="2" fill="#007bff" />
                                        <line x1="25" y1="25" x2="30" y2="30" stroke="#007bff" strokeWidth="1.5" />
                                        <line x1="30" y1="30" x2="35" y2="25" stroke="#007bff" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Open, extensible platform.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Enables your teams to build, deploy, manage, and customize AI with ease.
                                </p>
                            </div>
                        </div>

                        {/* Proven responsible AI */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
                                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <path d="M20 30 L25 35 L40 20" stroke="#007bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                        <circle cx="20" cy="30" r="8" stroke="#007bff" strokeWidth="2" fill="none" />
                                        <circle cx="40" cy="20" r="8" stroke="#007bff" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Proven responsible AI.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Builds trust with ISO 42001 accreditation and alignment to developing regulation.
                                </p>
                            </div>
                        </div>

                        {/* Flex credits */}
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
                                <div className="mb-4" style={{ width: '60px', height: '60px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="15" y="20" width="30" height="20" rx="2" stroke="#007bff" strokeWidth="2" fill="none" />
                                        <line x1="20" y1="25" x2="40" y2="25" stroke="#007bff" strokeWidth="1.5" />
                                        <line x1="20" y1="30" x2="40" y2="30" stroke="#007bff" strokeWidth="1.5" />
                                        <line x1="20" y1="35" x2="40" y2="35" stroke="#007bff" strokeWidth="1.5" />
                                        <circle cx="45" cy="30" r="8" stroke="#007bff" strokeWidth="2" fill="none" />
                                        <text x="45" y="35" textAnchor="middle" fontSize="12" fill="#007bff" fontWeight="bold">$</text>
                                    </svg>
                                </div>
                                <h5 className="mb-3" style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>
                                    Flex credits.
                                </h5>
                                <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a' }}>
                                    Aligns spending with value through a simple, flexible, and transparent system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

