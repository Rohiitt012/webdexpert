import Link from "next/link";

export default function Section2C() {
    return (
        <>
            {/*it solutions home section 2C – why custom domain email is good for business*/}
            <section className="it-solutions-home-section-2c position-relative overflow-hidden pt-120 pb-120 bg-light-2">
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <h2 className="text-dark mb-4 text-anime-style-3">
                                Why is a custom domain email address good for your business?
                            </h2>
                            <p className="text-muted mb-5 mb-lg-5">
                                Besides helping you showcase your own identity in your communications, custom domain email addresses have many other benefits.
                            </p>
                        </div>
                    </div>
                    
                    {/* First Row of Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 p-4 p-lg-5 h-100 shadow-sm">
                                <div className="mb-4 d-flex justify-content-start">
                                    <div style={{ width: "80px", height: "80px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            {/* Eye icon with tag/label */}
                                            <path d="M25 20 L30 20 L30 15 L50 15 L50 20 L55 20 L55 25 L50 25 L50 30 L30 30 L30 25 Z" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <ellipse cx="40" cy="40" rx="12" ry="8" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <circle cx="40" cy="40" r="4" fill="#2C2E3C" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Brand visibility</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    When a prospect looks at your email address, they will quickly be able to find your business by looking up your domain name.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 p-4 p-lg-5 h-100 shadow-sm">
                                <div className="mb-4 d-flex justify-content-start">
                                    <div style={{ width: "80px", height: "80px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            {/* Envelope with bow tie */}
                                            <rect x="20" y="28" width="40" height="28" rx="2" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <path d="M20 28 L40 42 L60 28" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            {/* Bow tie */}
                                            <rect x="35" y="48" width="10" height="4" rx="1" fill="#ff8c00" />
                                            <path d="M35 50 L32 48 L35 46" stroke="#ff8c00" strokeWidth="2" fill="none" />
                                            <path d="M45 50 L48 48 L45 46" stroke="#ff8c00" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Credibility</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    An email address that contains your business name sounds more official and trustworthy than an email address that doesn&apos;t have a custom domain.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Second Row of Cards */}
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 p-4 p-lg-5 h-100 shadow-sm">
                                <div className="mb-4 d-flex justify-content-start">
                                    <div style={{ width: "80px", height: "80px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            {/* Mailbox with arrows */}
                                            <path d="M25 30 L25 65 L55 65 L55 30 L50 30 L50 25 L30 25 L30 30 Z" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <rect x="32" y="50" width="16" height="8" rx="1" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            {/* Arrows pointing right */}
                                            <path d="M55 38 L60 40 L55 42" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <path d="M55 43 L60 45 L55 47" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <path d="M55 48 L60 50 L55 52" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Consistency</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    As your workforce grows, you can standardize email addresses and create consistent group addresses for roles, like <strong>support@yourdomain.com</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white rounded-4 p-4 p-lg-5 h-100 shadow-sm">
                                <div className="mb-4 d-flex justify-content-start">
                                    <div style={{ width: "80px", height: "80px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            {/* Megaphone with @ symbol */}
                                            <path d="M22 45 Q22 40 25 38 L30 38 L30 35 L35 35 L35 38 L50 38 Q55 40 55 45 L55 50 Q55 55 50 57 L35 57 L35 60 L30 60 L30 57 L25 57 Q20 55 20 50 Z" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <path d="M55 45 L62 42 L62 53" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            {/* @ symbol */}
                                            <circle cx="40" cy="47" r="6" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                            <path d="M40 43 L40 51" stroke="#2C2E3C" strokeWidth="2" />
                                            <path d="M36 47 L44 47" stroke="#2C2E3C" strokeWidth="2" />
                                            <path d="M38 45 Q40 43 42 45" stroke="#2C2E3C" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-dark mb-3 fw-bold">Brand marketing</h4>
                                <p className="text-dark text-opacity-75 mb-0">
                                    While there are numerous ways to market your business name, a custom email address is the simplest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

