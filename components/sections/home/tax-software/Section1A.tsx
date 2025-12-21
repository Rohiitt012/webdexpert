import Link from "next/link";

export default function Section1A() {
    return (
        <>
            {/*tax-software section 1a - Automated Customer Engagement Flowchart*/}
            <section className="tax-software-section-1a position-relative overflow-hidden py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="position-relative" style={{ minHeight: "600px" }}>
                                {/* User with Trigger Event (Left Top) */}
                                <div className="position-absolute" style={{ top: "0", left: "10%" }}>
                                    <div className="text-center mb-3">
                                        <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-2" style={{ width: "80px", height: "80px", border: "3px solid #25D366" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                <circle cx="25" cy="20" r="8" fill="#25D366"/>
                                                <path d="M15 35 Q25 45 35 35" stroke="#25D366" strokeWidth="3" fill="none"/>
                                            </svg>
                                        </div>
                                        <div className="bg-primary rounded-4 p-3 mb-2" style={{ backgroundColor: "#1877F2", color: "white", minWidth: "120px" }}>
                                            <span className="fw-bold">trigger</span>
                                        </div>
                                        <div className="border border-2 border-dashed rounded-3 p-3" style={{ borderColor: "#25D366", minWidth: "200px" }}>
                                            <span className="text-dark">e.g. application form drop-off</span>
                                        </div>
                                    </div>
                                    {/* Arrow Down */}
                                    <div className="text-center" style={{ marginTop: "10px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 30 50" fill="none">
                                            <path d="M15 0 L15 40 M15 40 L10 35 M15 40 L20 35" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Internal System or CRM (Left Bottom) */}
                                <div className="position-absolute" style={{ top: "200px", left: "10%" }}>
                                    <div className="bg-primary rounded-4 p-4 text-center" style={{ backgroundColor: "#1877F2", color: "white", minWidth: "200px" }}>
                                        <span className="fw-bold">internal system or CRM</span>
                                    </div>
                                    {/* Arrow Right */}
                                    <div className="position-absolute" style={{ top: "50%", right: "-60px", transform: "translateY(-50%)" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 60 30" fill="none">
                                            <path d="M0 15 L40 15 M40 15 L35 10 M40 15 L35 20" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Convrs Platform (Center) */}
                                <div className="position-absolute" style={{ top: "200px", left: "50%", transform: "translateX(-50%)" }}>
                                    <div className="bg-primary rounded-4 p-4 text-center" style={{ backgroundColor: "#1877F2", color: "white", minWidth: "150px" }}>
                                        <div className="mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <circle cx="20" cy="20" r="18" fill="white"/>
                                                <circle cx="20" cy="15" r="5" fill="#1877F2"/>
                                                <path d="M10 30 Q20 25 30 30" stroke="#1877F2" strokeWidth="2" fill="none"/>
                                            </svg>
                                        </div>
                                        <span className="fw-bold">convrs</span>
                                    </div>
                                    {/* Arrow Right */}
                                    <div className="position-absolute" style={{ top: "50%", right: "-60px", transform: "translateY(-50%)" }}>
                                        <div className="text-center">
                                            <span className="text-dark fw-bold" style={{ fontSize: "0.8rem" }}>whatsapp business</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 60 30" fill="none">
                                                <path d="M0 15 L40 15 M40 15 L35 10 M40 15 L35 20" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span className="text-dark" style={{ fontSize: "0.8rem" }}>api/platform</span>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp Business (Right Center) */}
                                <div className="position-absolute" style={{ top: "200px", right: "15%" }}>
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                            <circle cx="30" cy="30" r="30" fill="#25D366"/>
                                            <path d="M30 15C22.27 15 16 21.27 16 29C16 33.6 18.4 37.68 22 40.2L20 45L25 43C27.6 44.2 30.6 45 33.8 45C41.53 45 47.8 38.73 47.8 31C47.8 23.27 41.53 17 33.8 17H30V15Z" fill="white"/>
                                        </svg>
                                    </div>
                                    {/* Arrow Up */}
                                    <div className="text-center" style={{ marginTop: "10px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 30 50" fill="none">
                                            <path d="M15 50 L15 10 M15 10 L10 15 M15 10 L20 15" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* User with Phone and Automated Message (Right Top) */}
                                <div className="position-absolute" style={{ top: "0", right: "10%" }}>
                                    <div className="text-center">
                                        <div className="position-relative d-inline-block mb-3">
                                            <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", border: "3px solid #25D366" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                    <circle cx="25" cy="20" r="8" fill="#25D366"/>
                                                    <path d="M15 35 Q25 45 35 35" stroke="#25D366" strokeWidth="3" fill="none"/>
                                                </svg>
                                            </div>
                                            <div className="position-absolute" style={{ top: "-5px", right: "-5px" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <circle cx="15" cy="15" r="15" fill="#25D366"/>
                                                    <path d="M15 8C11.13 8 8 11.13 8 15C8 18.87 11.13 22 15 22C18.87 22 22 18.87 22 15C22 11.13 18.87 8 15 8Z" fill="white"/>
                                                </svg>
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "0.6rem" }}>1</span>
                                            </div>
                                        </div>
                                        <div className="bg-primary rounded-4 p-3 mb-3" style={{ backgroundColor: "#1877F2", color: "white", minWidth: "180px" }}>
                                            <span className="fw-bold">automated message</span>
                                        </div>
                                        <div className="bg-light rounded-4 p-4 mb-3" style={{ backgroundColor: "#DCF8C6", minWidth: "300px", textAlign: "left" }}>
                                            <p className="text-dark mb-0" style={{ fontSize: "0.95rem" }}>
                                                Hello, Cassie! We noticed you haven't completed part three of the account application form. Is there anything we can help you with?
                                            </p>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            <button className="btn rounded-pill px-4 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", minWidth: "250px" }}>
                                                Access account application guide
                                            </button>
                                            <button className="btn rounded-pill px-4 py-2 text-start" style={{ backgroundColor: "#25D366", color: "white", border: "none", minWidth: "250px" }}>
                                                Talk to an agent
                                            </button>
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

