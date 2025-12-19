import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*fintech-solution section 11 - CTA Section */}
            <section className="fintech-solution-section-11 position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    <div className="card border-0 rounded-4 shadow-lg p-5 bg-white">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h2 className="text-dark mb-4" style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.2' }}>
                                    Let Us Help You Win and Keep Your Valued Customers
                                </h2>
                                <p className="text-dark text-opacity-75 mb-4" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                    With a CRM created by ScienceSoft:
                                </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-start mb-3 gap-3">
                                        <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                            <i className="bi bi-check-lg text-white fs-6"></i>
                                        </div>
                                        <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                            You face neither missing nor unused functionality.
                                        </p>
                                    </li>
                                    <li className="d-flex align-items-start mb-3 gap-3">
                                        <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                            <i className="bi bi-check-lg text-white fs-6"></i>
                                        </div>
                                        <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                            Your team performs all their daily work conveniently and fast.
                                        </p>
                                    </li>
                                    <li className="d-flex align-items-start mb-3 gap-3">
                                        <div className="icon-shape icon-50 rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                                            <i className="bi bi-check-lg text-white fs-6"></i>
                                        </div>
                                        <p className="mb-0 text-dark" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                            You can evolve your system whenever you need.
                                        </p>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="#contact" className="btn btn-primary rounded-pill px-5 py-3" style={{ fontSize: '16px', fontWeight: '600' }}>
                                        Request service details
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="position-relative">
                                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-100">
                                        <circle cx="150" cy="150" r="120" fill="#FFD700" fillOpacity="0.1"/>
                                        <path d="M120 180L150 150L180 180L150 210Z" fill="#FFD700" fillOpacity="0.3"/>
                                        <path d="M100 120L120 100L140 120L120 140Z" fill="#FFD700" fillOpacity="0.5"/>
                                        <path d="M160 100L180 80L200 100L180 120Z" fill="#FFD700" fillOpacity="0.3" stroke="#FFD700" strokeWidth="2"/>
                                        <path d="M200 200L220 180L240 200L220 220Z" fill="none" stroke="#333" strokeWidth="2"/>
                                        <ellipse cx="150" cy="180" rx="40" ry="20" fill="#FFD700" fillOpacity="0.2"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

